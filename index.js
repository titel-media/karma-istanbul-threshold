'use strict';

const chalk = require('chalk');
const _ = require('lodash');
const fs = require('fs');
const checkCoverage = require('./lib').checkCoverage;
const chokidar = require('chokidar');

var KarmaIstanbulThresholdReporter = function (baseReporterDecorator, config) {
  // extend the base reporter
  baseReporterDecorator(this);
  var self = this;
  self.skip = false;

  config.istanbulThresholdReporter = config.istanbulThresholdReporter || {};
  _.defaults(config.istanbulThresholdReporter, {
    src: null,
    basePath: null,
    thresholds: {
      global: {
        statements: 0,
        branches: 0,
        lines: 0,
        functions: 0
      },
      each: {
        statements: 0,
        branches: 0,
        lines: 0,
        functions: 0
      }
    }
  });

  // disable chalk when colors is set to false
  chalk.enabled = config.colors !== false;

  self.reportFinished = function () {
    // Reassign `onExit` to just call `done` since we are done here
    self.onExit = function (done) {
      done();
    };
  };

  self.parseResults = function () {
    const json = JSON.parse(fs.readFileSync(config.istanbulThresholdReporter.src, 'utf8'));
    self.write('\n');
    const exitCode = checkCoverage(
      json,
      config.istanbulThresholdReporter.thresholds,
      self.write.bind(self),
      config.istanbulThresholdReporter.basePath
    );
    self.write('\n');

    if (exitCode) {
      process.exit(exitCode);
    }

    self.reportFinished();
  };

  self.onRunComplete = function (browsers, results) {
    if (results.exitCode) {
      self.reportFinished();
      return;
    }
    if (!config.istanbulThresholdReporter.src) {
      self.write('\n' + chalk.reset('istanbul-threshold: no src set.' +
          ' Skipping threshold test') + '\n');
      self.reportFinished();
    } else {
      const onSourceReady = function () {
        watcher.close();
        clearTimeout(self.waitForSourceTimeout);
        self.parseResults();
      };

      var watcher = chokidar.watch(config.istanbulThresholdReporter.src);

      watcher.on('change', (path, stats) => {
        onSourceReady();
      });
      watcher.on('add', (path, stats) => {
        onSourceReady();
      });

      self.waitForSourceTimeout = setTimeout(function () {
        self.write(chalk.red('\nWaiting for remapped coverage source timed out…\n'));
        watcher.close();
        self.reportFinished();
      }, 15000);
    }
  };

  self.onExit = function (done) {
    self.reportFinished = done;
  }
};

KarmaIstanbulThresholdReporter.$inject = ['baseReporterDecorator', 'config'];

module.exports = {
  'reporter:istanbul-threshold': ['type', KarmaIstanbulThresholdReporter]
};

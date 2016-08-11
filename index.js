'use strict';

const chalk = require('chalk');
const _ = require('lodash');
const fs = require('fs');
const istanbul = require('istanbul');
const checker = require('istanbul-threshold-checker');
const checkCoverage = require('./lib').checkCoverage;
const chokidar = require('chokidar');

let reportFinished = function () {

  // Reassign `onExit` to just call `done` since we are done here
  this.onExit = function (done) {
    done();
  };
};

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

    reportFinished();
  };

  self.onRunComplete = function (browsers, results) {
    if (results.exitCode) {
      return;
    }
    if (!config.istanbulThresholdReporter.src) {
      self.write('\n' + chalk.reset('istanbul-threshold: no src set.' +
          ' Skipping threshold test') + '\n');
      reportFinished();
    } else {
      var watcher = chokidar.watch(config.istanbulThresholdReporter.src);

      watcher.on('add', (path, stats) => {
        watcher.close();
        self.parseResults();
      });

      setTimeout(function () {
        self.write(chalk.red('\nWaiting for remapped coverage source timed out…\n'));
        watcher.close();
        reportFinished();
      }, 5000);
    }
  };

  self.onExit = function (done) {
    reportFinished = done;
  }
};

KarmaIstanbulThresholdReporter.$inject = ['baseReporterDecorator', 'config'];

module.exports = {
  'reporter:istanbul-threshold': ['type', KarmaIstanbulThresholdReporter]
};

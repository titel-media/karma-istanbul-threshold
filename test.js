'use strict';

const expect = require('chai').expect;
require('mocha');
const checkCoverage = require('./lib').checkCoverage;

const testBasePath = '/path/to/src';

const testJson = {
  "/path/to/src/components/icon/Icon.tsx":{"path":"/path/to/src/components/icon/Icon.tsx","statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":1,"column":31}},"2":{"start":{"line":2,"column":0},"end":{"line":2,"column":38}},"3":{"start":{"line":10,"column":0},"end":{"line":23,"column":1}},"4":{"start":{"line":10,"column":26},"end":{"line":10,"column":61}},"5":{"start":{"line":11,"column":2},"end":{"line":22,"column":3}},"6":{"start":{"line":12,"column":4},"end":{"line":12,"column":35}},"7":{"start":{"line":14,"column":4},"end":{"line":21,"column":6}},"8":{"start":{"line":23,"column":0},"end":{"line":23,"column":1}},"9":{"start":{"line":10,"column":13},"end":{"line":23,"column":1}}},"fnMap":{"1":{"name":"(anonymous_3)","line":10,"loc":{"start":{"line":10,"column":0},"end":{"line":null,"column":-1}}},"2":{"name":"(anonymous_5)","line":11,"loc":{"start":{"line":11,"column":2},"end":{"line":null,"column":-1}}}},"branchMap":{},"s":{"1":3,"2":3,"3":4,"4":4,"5":3,"6":1,"7":1,"8":3,"9":3},"b":{},"f":{"1":4,"2":1},"code":["import * as React from 'react';","const styles = require('./Icon.scss');","","export interface IconPropsType {","  glyph: string;","  height?: string;","  width?: string;","}","","export class Icon extends React.Component<IconPropsType, any> {","  render() {","    const glyph = this.props.glyph;","","    return (","      <svg","        className={styles.base}","        height={this.props.height}","        width={this.props.width}","        dangerouslySetInnerHTML={{__html: '<use xlink:href=\"' + glyph + '\"></use>'}}","      />","    );","  }","}",""],"l":{"1":3,"2":3,"10":4,"11":3,"12":1,"14":1,"23":3}},
  "/path/to/src/components/navbar/Navbar.tsx":{"path":"/path/to/src/components/navbar/Navbar.tsx","statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":1,"column":31}},"2":{"start":{"line":2,"column":0},"end":{"line":2,"column":44}},"3":{"start":{"line":3,"column":0},"end":{"line":3,"column":40}},"4":{"start":{"line":4,"column":0},"end":{"line":4,"column":49}},"5":{"start":{"line":5,"column":0},"end":{"line":5,"column":52}},"6":{"start":{"line":7,"column":0},"end":{"line":16,"column":2}},"7":{"start":{"line":7,"column":21},"end":{"line":16,"column":1}},"8":{"start":{"line":18,"column":0},"end":{"line":null,"column":-1}}},"fnMap":{"1":{"name":"(anonymous_1)","line":7,"loc":{"start":{"line":7,"column":15},"end":{"line":7,"column":20}}}},"branchMap":{},"s":{"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":1,"8":1},"b":{},"f":{"1":1},"code":["import * as React from 'react';","import usesStyles from 'helpers/usesStyles';","const styles = require('./Navbar.scss');","import MobileNavbar from './mobile/MobileNavbar';","import DesktopNavbar from './desktop/DesktopNavbar';","","const Navbar = () => (","  <div>","    <div styleName=\"desktop\">","      <DesktopNavbar/>","    </div>","    <div styleName=\"mobile\">","      <MobileNavbar/>","    </div>","  </div>",");","","export default usesStyles(styles, Navbar);",""],"l":{"1":1,"2":1,"3":1,"4":1,"5":1,"7":1,"18":1}},
  "/path/to/src/helpers/usesStyles.tsx":{"path":"/path/to/src/helpers/usesStyles.tsx","statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":1,"column":48}},"2":{"start":{"line":9,"column":0},"end":{"line":19,"column":1}},"3":{"start":{"line":10,"column":2},"end":{"line":18,"column":3}},"4":{"start":{"line":12,"column":4},"end":{"line":12,"column":38}},"5":{"start":{"line":15,"column":4},"end":{"line":17,"column":6}},"6":{"start":{"line":16,"column":6},"end":{"line":16,"column":49}},"7":{"start":{"line":9,"column":0},"end":{"line":null,"column":-1}}},"fnMap":{"1":{"name":"usesStyles","line":9,"loc":{"start":{"line":9,"column":0},"end":{"line":9,"column":60}}},"2":{"name":"(anonymous_2)","line":15,"loc":{"start":{"line":15,"column":11},"end":{"line":15,"column":41}}}},"branchMap":{"1":{"line":10,"type":"if","locations":[{"start":{"line":10,"column":2},"end":{"line":10,"column":1}},{"start":{"line":10,"column":2},"end":{"line":10,"column":1}}]}},"s":{"1":2,"2":1,"3":8,"4":5,"5":3,"6":3,"7":2},"b":{"1":[5,3]},"f":{"1":8,"2":3},"code":["const CSSModules = require('react-css-modules');","","/**"," * Passes syles to react-css-modules plugin."," *"," * @param styles"," * @param target, optional, only used when not used as decorator"," */","export default function usesStyles(styles: any, target?: any): any {","  if (target) {","    / use as function","    return CSSModules(target, styles);","  } else {","    / use as decorator","    return function (decoratorTarget: any): any {","      return CSSModules(decoratorTarget, styles);","    };","  }","};",""],"l":{"1":2,"9":2,"10":8,"12":5,"15":3,"16":3}},
  "/path/to/src/components/navbar/mobile/MobileNavbar.tsx":{"path":"/path/to/src/components/navbar/mobile/MobileNavbar.tsx","statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":1,"column":31}},"2":{"start":{"line":2,"column":0},"end":{"line":2,"column":44}},"3":{"start":{"line":3,"column":0},"end":{"line":3,"column":38}},"4":{"start":{"line":4,"column":0},"end":{"line":4,"column":65}},"5":{"start":{"line":6,"column":0},"end":{"line":6,"column":46}},"6":{"start":{"line":8,"column":0},"end":{"line":8,"column":50}},"7":{"start":{"line":9,"column":0},"end":{"line":9,"column":58}},"8":{"start":{"line":10,"column":0},"end":{"line":10,"column":40}},"9":{"start":{"line":20,"column":0},"end":{"line":73,"column":1}},"10":{"start":{"line":20,"column":27},"end":{"line":20,"column":58}},"11":{"start":{"line":22,"column":2},"end":{"line":25,"column":3}},"12":{"start":{"line":23,"column":4},"end":{"line":23,"column":32}},"13":{"start":{"line":24,"column":4},"end":{"line":24,"column":28}},"14":{"start":{"line":27,"column":2},"end":{"line":36,"column":3}},"15":{"start":{"line":28,"column":4},"end":{"line":35,"column":5}},"16":{"start":{"line":29,"column":6},"end":{"line":29,"column":33}},"17":{"start":{"line":31,"column":6},"end":{"line":33,"column":7}},"18":{"start":{"line":32,"column":8},"end":{"line":32,"column":53}},"19":{"start":{"line":34,"column":6},"end":{"line":34,"column":19}},"20":{"start":{"line":38,"column":2},"end":{"line":51,"column":3}},"21":{"start":{"line":44,"column":4},"end":{"line":50,"column":6}},"22":{"start":{"line":53,"column":2},"end":{"line":72,"column":3}},"23":{"start":{"line":54,"column":4},"end":{"line":71,"column":6}},"24":{"start":{"line":58,"column":56},"end":{"line":64,"column":13}},"25":{"start":{"line":19,"column":0},"end":{"line":19,"column":19}},"26":{"start":{"line":73,"column":0},"end":{"line":73,"column":1}},"27":{"start":{"line":75,"column":0},"end":{"line":82,"column":2}},"28":{"start":{"line":76,"column":2},"end":{"line":81,"column":4}},"29":{"start":{"line":84,"column":0},"end":{"line":90,"column":2}},"30":{"start":{"line":85,"column":2},"end":{"line":89,"column":4}},"31":{"start":{"line":87,"column":6},"end":{"line":87,"column":36}},"32":{"start":{"line":92,"column":0},"end":{"line":null,"column":-1}}},"fnMap":{"1":{"name":"(anonymous_5)","line":20,"loc":{"start":{"line":20,"column":0},"end":{"line":null,"column":-1}}},"2":{"name":"(anonymous_7)","line":22,"loc":{"start":{"line":22,"column":2},"end":{"line":null,"column":-1}}},"3":{"name":"(anonymous_8)","line":27,"loc":{"start":{"line":27,"column":2},"end":{"line":27,"column":46}}},"4":{"name":"(anonymous_9)","line":38,"loc":{"start":{"line":38,"column":2},"end":{"line":null,"column":-1}}},"5":{"name":"(anonymous_10)","line":53,"loc":{"start":{"line":53,"column":2},"end":{"line":null,"column":-1}}},"6":{"name":"(anonymous_11)","line":58,"loc":{"start":{"line":58,"column":39},"end":{"line":58,"column":51}}},"7":{"name":"(anonymous_12)","line":75,"loc":{"start":{"line":75,"column":24},"end":{"line":75,"column":41}}},"8":{"name":"(anonymous_13)","line":84,"loc":{"start":{"line":84,"column":27},"end":{"line":84,"column":41}}},"9":{"name":"(anonymous_14)","line":86,"loc":{"start":{"line":86,"column":16},"end":{"line":null,"column":-1}}}},"branchMap":{"1":{"line":28,"type":"if","locations":[{"start":{"line":28,"column":4},"end":{"line":28,"column":3}},{"start":{"line":28,"column":4},"end":{"line":28,"column":3}}]},"2":{"line":31,"type":"if","locations":[{"start":{"line":31,"column":6},"end":{"line":31,"column":5}},{"start":{"line":31,"column":6},"end":{"line":31,"column":5}}]},"3":{"line":56,"type":"cond-expr","locations":[{"start":{"line":56,"column":48},"end":{"line":56,"column":66}},{"start":{"line":56,"column":69},"end":{"line":56,"column":78}}]},"4":{"line":77,"type":"binary-expr","locations":[{"start":{"line":77,"column":17},"end":{"line":77,"column":30}},{"start":{"line":78,"column":6},"end":{"line":78,"column":45}},{"start":{"line":79,"column":6},"end":{"line":79,"column":54}}]}},"s":{"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":1,"8":1,"9":2,"10":1,"11":1,"12":0,"13":0,"14":1,"15":0,"16":0,"17":0,"18":0,"19":0,"20":1,"21":0,"22":1,"23":0,"24":0,"25":1,"26":1,"27":1,"28":0,"29":1,"30":0,"31":0,"32":1},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0,0]},"f":{"1":1,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0},"code":["import * as React from 'react';","import usesStyles from 'helpers/usesStyles';","import { connect } from 'react-redux';","import { HOME, DISCOVER, PROFILE, SEARCH, MORE } from '../icons';","import { IconPropsType } from 'components/icon';","const styles = require('./MobileNavbar.scss');","import { MobileNavbarItemPropsType } from './MobileNavbarItem';","import MobileNavbarItem from './MobileNavbarItem';","import MobileNavbarMoreMenu from './MobileNavbarMoreMenu';","import { toggleMenu } from '../actions';","import { StateType } from '../../../rootReducer';","","export interface PropsType {","  currentPath?: string;","  toggleMenu?: any;","  menuIsOpen?: boolean;","}","","@usesStyles(styles)","class MobileNavbar extends React.Component<PropsType, any> {","","  toggleMenu() {","    console.log('toggle menu…');","    this.props.toggleMenu();","  }","","  itemIsActive(item: MobileNavbarItemPropsType): boolean {","    if (this.props.menuIsOpen) {","      return item.key === 'more';","    } else {","      if (item.route) {","        return item.route === this.props.currentPath;","      }","      return false;","    }","  }","","  getNavbarItems(): {","    key: string,","    route?: string,","    onClick?: any,","    icon: IconPropsType,","  }[] {","    return [","      { key: 'home', route: '/', icon: HOME },","      { key: 'discover', route: '/discover', icon: DISCOVER },","      { key: 'search', route: '/search', icon: SEARCH },","      { key: 'profile', route: '/profile', icon: PROFILE },","      { key: 'more', onClick: this.toggleMenu.bind(this), icon: MORE },","    ];","  }","","  render() {","    return (","      <div>","        <nav styleName={this.props.menuIsOpen ? 'navbar-menu-open' : 'navbar'}>","          <ul>","            {this.getNavbarItems().map((item, index) => (","              <MobileNavbarItem","                {...item}","                active={this.itemIsActive(item)}","                inverted={this.props.menuIsOpen}","              />","            ))}","          </ul>","        </nav>","        <MobileNavbarMoreMenu","          menuIsOpen={this.props.menuIsOpen}","        />","      </div>","    );","  }","}","","const mapStateToProps = (state: StateType): any => {","  return {","    currentPath: state.routing &&","      state.routing.locationBeforeTransitions &&","      state.routing.locationBeforeTransitions.pathname,","    menuIsOpen: state.navbar.menuIsOpen,","  };","};","","const mapDispatchToProps = (dispatch: any): any => {","  return {","    toggleMenu: (): any => {","      return dispatch(toggleMenu());","    },","  };","};","","export default connect(mapStateToProps, mapDispatchToProps)(MobileNavbar);",""],"l":{"1":1,"2":1,"3":1,"4":1,"6":1,"8":1,"9":1,"10":1,"19":1,"20":2,"22":1,"23":0,"24":0,"27":1,"28":0,"29":0,"31":0,"32":0,"34":0,"38":1,"44":0,"53":1,"54":0,"58":0,"73":1,"75":1,"76":0,"84":1,"85":0,"87":0,"92":1}},
  "/path/to/src/components/navbar/mobile/MobileNavbarItem.tsx":{"path":"/path/to/src/components/navbar/mobile/MobileNavbarItem.tsx","statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":1,"column":54}},"2":{"start":{"line":2,"column":0},"end":{"line":2,"column":31}},"3":{"start":{"line":3,"column":0},"end":{"line":3,"column":36}},"4":{"start":{"line":4,"column":0},"end":{"line":4,"column":44}},"5":{"start":{"line":5,"column":0},"end":{"line":5,"column":50}},"6":{"start":{"line":16,"column":0},"end":{"line":36,"column":2}},"7":{"start":{"line":23,"column":4},"end":{"line":25,"column":48}},"8":{"start":{"line":27,"column":4},"end":{"line":35,"column":6}},"9":{"start":{"line":38,"column":0},"end":{"line":null,"column":-1}}},"fnMap":{"1":{"name":"(anonymous_2)","line":16,"loc":{"start":{"line":16,"column":25},"end":{"line":22,"column":28}}}},"branchMap":{"1":{"line":24,"type":"cond-expr","locations":[{"start":{"line":24,"column":7},"end":{"line":24,"column":33}},{"start":{"line":25,"column":7},"end":{"line":25,"column":46}}]},"2":{"line":24,"type":"cond-expr","locations":[{"start":{"line":24,"column":16},"end":{"line":24,"column":24}},{"start":{"line":24,"column":27},"end":{"line":24,"column":33}}]},"3":{"line":25,"type":"cond-expr","locations":[{"start":{"line":25,"column":16},"end":{"line":25,"column":33}},{"start":{"line":25,"column":36},"end":{"line":25,"column":46}}]},"4":{"line":30,"type":"cond-expr","locations":[{"start":{"line":30,"column":10},"end":{"line":30,"column":56}},{"start":{"line":32,"column":10},"end":{"line":32,"column":51}}]}},"s":{"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":0,"8":0,"9":1},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0]},"f":{"1":0},"code":["import { Icon, IconPropsType } from 'components/icon';","import * as React from 'react';","import { Link } from 'react-router';","import usesStyles from 'helpers/usesStyles';","const styles = require('./MobileNavbarItem.scss');","","export interface MobileNavbarItemPropsType {","  key: string;","  onClick?: any;","  active?: boolean;","  route?: string;","  icon: IconPropsType;","  inverted?: boolean;","}","","const MobileNavbarItem = ({","  onClick,","  active,","  icon,","  route,","  inverted,","}: MobileNavbarItemPropsType) => {","    let styleName = !inverted ?","      (active ? 'active' : 'base') :","      (active ? 'active-inverted' : 'inverted');","","    return (","      <li styleName={styleName}>","        {onClick ? (","          <div onClick={onClick}><Icon {...icon}/></div>","        ) : (","          <Link to={route}><Icon {...icon}/></Link>","        )}","      </li>","    );","};","","export default usesStyles(styles, MobileNavbarItem);",""],"l":{"1":1,"2":1,"3":1,"4":1,"5":1,"16":1,"23":0,"27":0,"38":1}},
  "/path/to/src/components/navbar/mobile/MobileNavbarMoreMenu.tsx":{"path":"/path/to/src/components/navbar/mobile/MobileNavbarMoreMenu.tsx","statementMap":{"1":{"start":{"line":2,"column":0},"end":{"line":2,"column":31}},"2":{"start":{"line":3,"column":0},"end":{"line":3,"column":36}},"3":{"start":{"line":4,"column":0},"end":{"line":4,"column":44}},"4":{"start":{"line":5,"column":0},"end":{"line":5,"column":54}},"5":{"start":{"line":11,"column":0},"end":{"line":20,"column":2}},"6":{"start":{"line":22,"column":0},"end":{"line":37,"column":2}},"7":{"start":{"line":24,"column":37},"end":{"line":37,"column":1}},"8":{"start":{"line":27,"column":38},"end":{"line":31,"column":7}},"9":{"start":{"line":39,"column":0},"end":{"line":null,"column":-1}}},"fnMap":{"1":{"name":"(anonymous_1)","line":22,"loc":{"start":{"line":22,"column":29},"end":{"line":24,"column":32}}},"2":{"name":"(anonymous_2)","line":27,"loc":{"start":{"line":27,"column":21},"end":{"line":27,"column":33}}}},"branchMap":{"1":{"line":25,"type":"cond-expr","locations":[{"start":{"line":25,"column":31},"end":{"line":25,"column":42}},{"start":{"line":25,"column":45},"end":{"line":25,"column":54}}]}},"s":{"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":0,"8":0,"9":1},"b":{"1":[0,0]},"f":{"1":0,"2":0},"code":["/import { Icon, IconPropsType } from '../icon/Icon';","import * as React from 'react';","import { Link } from 'react-router';","import usesStyles from 'helpers/usesStyles';","const styles = require('./MobileNavbarMoreMenu.scss');","","export interface MobileNavbarMoreMenuPropsType {","  menuIsOpen?: boolean;","}","","const menuItems = [","  { label: 'Home', route: '/' },","  { label: 'Collections', route: '/collections' },","  { label: 'Categories', route: '/categories' },","  { label: 'Brands', route: '/brands' },","  { label: 'Release Calendar', route: '/release-calendar' },","  { label: 'Notifications', route: '/notifications' },","  { label: 'My Feed', route: '/feed' },","  { label: 'My Profil', route: '/profile' },","];","","const MobileNavbarMoreMenu = ({","  menuIsOpen,","}: MobileNavbarMoreMenuPropsType) => (","  <nav styleName={menuIsOpen ? 'container' : 'hidden'}>","    <ul styleName=\"list\">","      {menuItems.map((item, index) => (","        <li key={index} styleName=\"item\">","            <Link to={item.route}>{item.label}</Link>","        </li>","      ))}","      <li key=\"logout\" styleName=\"item-logout\">","        <span>Logout</span>","      </li>","    </ul>","  </nav>",");","","export default usesStyles(styles, MobileNavbarMoreMenu);",""],"l":{"2":1,"3":1,"4":1,"5":1,"11":1,"22":1,"24":0,"27":0,"39":1}},
  "/path/to/src/components/navbar/desktop/DesktopNavbar.tsx":{"path":"/path/to/src/components/navbar/desktop/DesktopNavbar.tsx","statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":1,"column":31}},"2":{"start":{"line":2,"column":0},"end":{"line":2,"column":44}},"3":{"start":{"line":3,"column":0},"end":{"line":3,"column":38}},"4":{"start":{"line":4,"column":0},"end":{"line":4,"column":34}},"5":{"start":{"line":5,"column":0},"end":{"line":5,"column":34}},"6":{"start":{"line":6,"column":0},"end":{"line":6,"column":36}},"7":{"start":{"line":7,"column":0},"end":{"line":7,"column":47}},"8":{"start":{"line":9,"column":0},"end":{"line":9,"column":52}},"9":{"start":{"line":11,"column":0},"end":{"line":11,"column":39}},"10":{"start":{"line":20,"column":0},"end":{"line":74,"column":1}},"11":{"start":{"line":20,"column":28},"end":{"line":20,"column":59}},"12":{"start":{"line":22,"column":2},"end":{"line":24,"column":3}},"13":{"start":{"line":23,"column":4},"end":{"line":23,"column":49}},"14":{"start":{"line":26,"column":2},"end":{"line":37,"column":3}},"15":{"start":{"line":31,"column":4},"end":{"line":36,"column":6}},"16":{"start":{"line":39,"column":2},"end":{"line":73,"column":3}},"17":{"start":{"line":40,"column":4},"end":{"line":72,"column":6}},"18":{"start":{"line":50,"column":58},"end":{"line":55,"column":15}},"19":{"start":{"line":19,"column":0},"end":{"line":19,"column":19}},"20":{"start":{"line":74,"column":0},"end":{"line":74,"column":1}},"21":{"start":{"line":88,"column":9},"end":{"line":74,"column":1}},"22":{"start":{"line":76,"column":0},"end":{"line":82,"column":2}},"23":{"start":{"line":77,"column":2},"end":{"line":81,"column":4}},"24":{"start":{"line":84,"column":0},"end":{"line":86,"column":2}},"25":{"start":{"line":85,"column":2},"end":{"line":85,"column":12}},"26":{"start":{"line":89,"column":0},"end":{"line":null,"column":-1}}},"fnMap":{"1":{"name":"(anonymous_5)","line":20,"loc":{"start":{"line":20,"column":0},"end":{"line":null,"column":-1}}},"2":{"name":"(anonymous_7)","line":22,"loc":{"start":{"line":22,"column":2},"end":{"line":22,"column":47}}},"3":{"name":"(anonymous_8)","line":26,"loc":{"start":{"line":26,"column":2},"end":{"line":null,"column":-1}}},"4":{"name":"(anonymous_9)","line":39,"loc":{"start":{"line":39,"column":2},"end":{"line":null,"column":-1}}},"5":{"name":"(anonymous_10)","line":50,"loc":{"start":{"line":50,"column":41},"end":{"line":50,"column":53}}},"6":{"name":"(anonymous_11)","line":76,"loc":{"start":{"line":76,"column":24},"end":{"line":76,"column":41}}},"7":{"name":"(anonymous_12)","line":84,"loc":{"start":{"line":84,"column":27},"end":{"line":84,"column":41}}}},"branchMap":{"1":{"line":78,"type":"binary-expr","locations":[{"start":{"line":78,"column":17},"end":{"line":78,"column":30}},{"start":{"line":79,"column":4},"end":{"line":79,"column":43}},{"start":{"line":80,"column":4},"end":{"line":80,"column":52}}]}},"s":{"1":2,"2":2,"3":2,"4":2,"5":2,"6":2,"7":2,"8":2,"9":2,"10":3,"11":3,"12":2,"13":4,"14":2,"15":1,"16":3,"17":1,"18":4,"19":2,"20":2,"21":2,"22":2,"23":0,"24":2,"25":0,"26":2},"b":{"1":[0,0,0]},"f":{"1":3,"2":4,"3":1,"4":1,"5":4,"6":0,"7":0},"code":["import * as React from 'react';","import usesStyles from 'helpers/usesStyles';","import { connect } from 'react-redux';","import { SEARCH } from '../icons';","import { LOGO_TEXT } from 'icons';","import { Link } from 'react-router';","const styles = require('./DesktopNavbar.scss');","import { DesktopNavbarItemPropsType } from './DesktopNavbarItem';","import DesktopNavbarItem from './DesktopNavbarItem';","import { StateType } from '../../../rootReducer';","import { Icon } from 'components/icon';","","export interface PropsType {","  currentPath?: string;","  toggleMenu?: any;","  menuIsOpen?: boolean;","}","","@usesStyles(styles)","class DesktopNavbar extends React.Component<PropsType, any> {","","  itemIsActive(item: DesktopNavbarItemPropsType): boolean {","    return item.route === this.props.currentPath;","  }","","  getNavbarItems(): {","    key: string,","    route: string,","    label: string,","  }[] {","    return [","      { key: 'collections', route: '/collections', label: 'Collections' },","      { key: 'categories', route: '/categories', label: 'Categories' },","      { key: 'brands', route: '/brands', label: 'Brands' },","      { key: 'feed', route: '/feed', label: 'My Feed' },","    ];","  }","","  render() {","    return (","      <div styleName=\"navbar\">","        <div styleName=\"navbar-contents\">","          <div styleName=\"logo\">","            <Link to=\"/\">","              <Icon {...LOGO_TEXT} />","            </Link>","          </div>","          <nav>","            <ul styleName=\"navbar-items\">","              {this.getNavbarItems().map((item, index) => (","                <DesktopNavbarItem","                  {...item}","                  active={this.itemIsActive(item)}","                />","              ))}","            </ul>","          </nav>","          <div styleName=\"spacer\"></div>","          <ul styleName=\"navbar-actions\">","            <li styleName=\"search\">","              <Icon {...SEARCH} width=\"20px\" height=\"20px\"/>","            </li>","            <li styleName=\"login\">","              Login","            </li>","            <li styleName=\"join\">","              Join","            </li>","          </ul>","        </div>","      </div>","    );","  }","}","","const mapStateToProps = (state: StateType): any => {","  return {","    currentPath: state.routing &&","    state.routing.locationBeforeTransitions &&","    state.routing.locationBeforeTransitions.pathname,","  };","};","","const mapDispatchToProps = (dispatch: any): any => {","  return {};","};","","export { DesktopNavbar };","export default connect(mapStateToProps, mapDispatchToProps)(DesktopNavbar);",""],"l":{"1":2,"2":2,"3":2,"4":2,"5":2,"6":2,"7":2,"9":2,"11":2,"19":2,"20":3,"22":2,"23":4,"26":2,"31":1,"39":3,"40":1,"50":4,"74":2,"76":2,"77":0,"84":2,"85":0,"88":2,"89":2}},
  "/path/to/src/components/navbar/desktop/DesktopNavbarItem.tsx":{"path":"/path/to/src/components/navbar/desktop/DesktopNavbarItem.tsx","statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":1,"column":31}},"2":{"start":{"line":2,"column":0},"end":{"line":2,"column":36}},"3":{"start":{"line":3,"column":0},"end":{"line":3,"column":44}},"4":{"start":{"line":4,"column":0},"end":{"line":4,"column":51}},"5":{"start":{"line":13,"column":0},"end":{"line":26,"column":2}},"6":{"start":{"line":19,"column":2},"end":{"line":19,"column":47}},"7":{"start":{"line":21,"column":2},"end":{"line":25,"column":4}},"8":{"start":{"line":28,"column":0},"end":{"line":null,"column":-1}}},"fnMap":{"1":{"name":"(anonymous_1)","line":13,"loc":{"start":{"line":13,"column":26},"end":{"line":17,"column":29}}}},"branchMap":{"1":{"line":19,"type":"cond-expr","locations":[{"start":{"line":19,"column":29},"end":{"line":19,"column":37}},{"start":{"line":19,"column":40},"end":{"line":19,"column":46}}]}},"s":{"1":2,"2":2,"3":2,"4":2,"5":2,"6":0,"7":0,"8":2},"b":{"1":[0,0]},"f":{"1":0},"code":["import * as React from 'react';","import { Link } from 'react-router';","import usesStyles from 'helpers/usesStyles';","const styles = require('./DesktopNavbarItem.scss');","","export interface DesktopNavbarItemPropsType {","  key: string;","  active?: boolean;","  route: string;","  label: string;","}","","const DesktopNavbarItem = ({","  active,","  route,","  label,","}: DesktopNavbarItemPropsType) => {","","  const styleName = active ? 'active' : 'base';","","  return (","    <li styleName={styleName}>","        <Link to={route}>{label}</Link>","    </li>","  );","};","","export default usesStyles(styles, DesktopNavbarItem);",""],"l":{"1":2,"2":2,"3":2,"4":2,"13":2,"19":0,"21":0,"28":2}}};

var testThresholds = {
  global: {
    statements: 100,
    branches: 90,
    lines: 70,
    functions: 10
  },
  each: {
    statements: 0,
    branches: 20,
    lines: 60,
    functions: 100
  }
};

let logs;
const testLog = function (msg) {
  //console.log(msg);
  logs.push(msg);
};

describe('karma-remapped-coverage-reporter', function() {
  describe('checkCoverage()', function() {

    it('should work', function() {
      logs = [];
      checkCoverage(testJson, testThresholds, testLog, testBasePath);
      expect(logs.length).to.equal(13);
    });

    it('should return 0 on success', function() {
      logs = [];
      const easyThresholds = {
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
      };
      logs = [];
      const result = checkCoverage(testJson, easyThresholds, testLog, testBasePath);
      expect(result).to.equal(0);
      expect(logs.length).to.equal(0);
    });

    it('should return 1 on failure', function() {
      logs = [];
      const hardThresholds = {
        global: {
          statements: 100,
          branches: 100,
          lines: 0,
          functions: 0,
        },
        each: {
          statements: 0,
          branches: 0,
          lines: 0,
          functions: 100,
        }
      };
      logs = [];
      const result = checkCoverage(testJson, hardThresholds, testLog, testBasePath);
      expect(result).to.equal(1);
      expect(logs.length).to.equal(7);
    });
  });
});

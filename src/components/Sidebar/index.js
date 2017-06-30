/* @flow */
import React, { Component } from 'react';
import { isEmpty } from 'lodash';
import { Link } from 'react-router-dom';

import Icon from 'src/components/SimpleLineIcon';
import Text from 'src/components/TranslatedRichText';

import styles from './styles.css';

type Props = {|
  children?: any,
  onSearchPressed?: () => any,
  isSearching?: boolean,
  promoMessage?: string,
  whishlistBadgeNumber?: number,
  cartBadgeNumber?: number,
  onCategoryPressed: (categoryId: string) => any,
  menu: any,
|};

type State = {|
  isMobileMenuOpen: boolean,
|};

class Sidebar extends Component<void, Props, State> {
  state = { isMobileMenuOpen: false };
  constructor(props) {
    super(props);
    this.state = {
      showProduct: false,
      showMenu: false,

    };
  }
  _renderMenuFirstLevelItemSingle = (code: string, menu: any) => {
    return (
      <li>
        <div className={styles.level0_no_children}>
          <Link to={menu.link}>
            <Text id={code} />
          </Link>
        </div>
      </li>
    );
  };
  _renderMenuLogout = (code: string, menu: any) => {
    return (
      <div className={styles.logout}>
        <Link to={menu.link}>
          <Icon name={"logout"} /> LOGOUT
        </Link>
      </div>
    );
  };

  _renderMenuFirstLevelItem = (code: string, menu: any) => {
    console.log('menu', menu);
    return (
      <li onClick={() => {::this.showList('show')}}>
        <div className={styles.level0_has_children}>
          <span><Text id={code} /></span>

          <div className={styles.dropdownWrapper}>
            {this._renderDropdown(menu)}
          </div>
        </div>
      </li>
    );
  };

  showList = () => {
    const show = this.state.showProduct;
    console.log('showProduct', this.state.showProduct);
    this.setState({showProduct: !show})
  };
  _renderRow = (row: any, key: number) => {
    return (
      <li key={key}>
        <Link to={row.link}>
          {row.label}
        </Link>
      </li>
    );
  };

  _renderSeeAllLink = (link: any) => {
    return (
      <li className={styles.viewAll}>
        <Link to={link}>
          <span> <Icon name={'control-play'} /> Vedi tutto</span>
        </Link>
      </li>
    );
  };

  _renderColumn = (column: any, key: number) => {
    return (
      <div key={key} className={styles.categoryWrapper}>
        <div className={styles.category}>
          {column.title
            ? column.see_all_link
              ? <h3><Link to={column.see_all_link}>{column.title}</Link></h3>
              : <h3>{column.title}</h3>
            : <div className={styles.no_title_spacer} />}
          <ul className={styles.level2}>
            {column.rows.map(this._renderRow)}
            {column.see_all_link ? this._renderSeeAllLink(column.see_all_link) : null}
          </ul>
        </div>
      </div>
    );
  };

  _renderDropdown = (menu: any) => {
    return (
      <div className={!this.state.showProduct ? styles.dropdown : styles.dropdownActive}>

        <div className={styles.dropdownCategories}>
          {menu.columns.map(this._renderColumn)}
        </div>
      </div>
    );
  };
  _renderBtnCloseMenu = () => {
    return(
      <div
        className={styles.closeOpenMenu}
        onClick={() => {::this.closePopup()}}
      >
        <span><Icon name={'close'} /></span>
      </div>
    )
  };
  _renderBtnOpenMenu = () => {
    return(
      <div
        className={this.state.showMenu  ? styles.btnOpenMenuHidden : styles.btnOpenMenu }
        onClick={() => {::this.openPopup()}}
      >
        <span><Icon name={'menu'} /></span>
      </div>
    )
  };


  openPopup = () => {
    console.log('open');
    this.setState({showMenu: true})
  };
  closePopup = () => {
    console.log('close');
    this.setState({showMenu: false})
  };

  render() {
    const {
      children,
      menu,
    } = this.props;

    const { isMobileMenuOpen } = this.state;
    return (

      <div className={styles.container}>
        <div className={styles.sidebar}>
          <ul>
            <li onClick={() => {::this.openPopup()}}>
              <p><Icon name={'user'} /></p>
              <p>IL MIO Profilo</p>
            </li>
            <li onClick={() => {::this.openPopup()}}>
              <p><Icon name={'info'} /></p>
              <p>Come Funzina</p>
            </li>
            <li onClick={() => {::this.openPopup()}}>
              <p><Icon name={'paper-plane'} /></p>
              <p>vendi</p>
            </li>
            <li onClick={() => {::this.openPopup()}}>
              <p><Icon name={'present'} /></p>
              <p>invita de guadagna</p>
            </li>
            <li onClick={() => {::this.openPopup()}}>
              <p><Icon name={'book-open'} /></p>
              <p>blog</p>
            </li>
            <li onClick={() => {::this.openPopup()}}>
              <p><Icon name={'share'} /></p>
              <p>condividi</p>
            </li>
            <li className={styles.mes}>
              <p></p>
              <p><Icon name={'bell'} /></p>
            </li>

          </ul>
        </div>
        <div
          className={isMobileMenuOpen ? styles.primaryMobileMenuOpen : styles.primaryMobileMenu}
        >
          {children}
        </div>

        <div className={styles.containerHeader}>
          {this._renderBtnOpenMenu()}

          <div className={!this.state.showMenu ? styles.menuWrapper : styles.menuWrapperOpen}>
            {this._renderBtnCloseMenu()}

            <ul className={styles.primaryMenuMobile}>
              {this._renderMenuFirstLevelItemSingle('header.woman', menu['header.woman'])}
              {this._renderMenuFirstLevelItemSingle('header.man', menu['header.man'])}
              {this._renderMenuFirstLevelItemSingle('header.kid', menu['header.kid'])}
              {this._renderMenuFirstLevelItemSingle('header.new_in', menu['header.new_in'])}
              {this._renderMenuFirstLevelItem('header.brand', menu['header.brand'])}
              {this._renderMenuFirstLevelItemSingle('header.products', menu['header.products'])}
            </ul>
            <div className={styles.logoutWr}>
              {this._renderMenuLogout('header.logout', menu['header.logout'])}
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Sidebar;

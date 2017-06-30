/* @flow */
import React, { Component } from 'react';
import { isEmpty } from 'lodash';
import { Link } from 'react-router-dom';
import { map, mapKeys, toArray } from 'lodash';

import Icon from 'src/components/SimpleLineIcon';
import Text from 'src/components/TranslatedRichText';
import Picture from 'src/components/Picture';

import promotionImage from 'src/images/mock/menuHeader-left.png';
import logo from 'src/images/privategriffe-full.png';
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

  _renderMenuFirstLevelItemsingle = (code: string, menu: any) => {
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
          <img src="" alt="" />
        </Link>
      </div>
    );
  };

  _renderMenuFirstLevelItem = (code: string, menu: any) => {
    console.log('menu', menu);
    return (
      <li>
        <div className={styles.level0_has_children}>
          <Link to={menu.link}>
            <Text id={code} />
          </Link>
          <div className={styles.dropdownWrapper}>
            {this._renderDropdown(menu)}
          </div>
        </div>
      </li>
    );
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

  _renderPublishingSectionLink = (section: any, key: number) => {
    return (
      <li key={key}>
        <a href={section.link}>
          <Icon name={'control-play'} /> <Text id={section.label} />
        </a>
      </li>
    );
  };

  _renderPublishingSection = (publishing_section: any) => {
    const pictures = toArray(
      mapKeys(
        publishing_section.publishing_image.image,
        (v, k) => (v.maxWidth = k.replace('w', ''))
      )
    );
    return (
      <div>
        <ul className={styles.links}>
          {publishing_section.links.map(this._renderPublishingSectionLink)}
        </ul>

        <div className={styles.imageWrapper}>
          <a href={publishing_section.publishing_image.link}>
            <Picture
              alt={publishing_section.publishing_image.alt}
              defaultSrc={publishing_section.publishing_image.image['w1366'].src}
              sources={pictures}
              enableSpinner={true}
            />
          </a>
        </div>
      </div>
    );
  };

  _renderDropdown = (menu: any) => {
    return (
      <div className={styles.dropdown}>

        <div className={styles.dropdownCategories}>
          {menu.columns.map(this._renderColumn)}
        </div>
      </div>
    );
  };

  _renderIconMenu = (
    icon: string,
    badgeNumber: number = 0,
    isSelected?: boolean = false,
    onIconPressed?: () => any
  ) => {
    return (
      <div
        className={isSelected ? styles.iconButtonSelected : styles.iconButton}
        onClick={onIconPressed ? onIconPressed : () => null}
      >
        <Icon style={isSelected ? styles.iconSelected : styles.icon} name={icon} />
        {badgeNumber > 0 && <span className={styles.badge}>{badgeNumber}</span>}
      </div>
    );
  };

  _renderIconLink = (icon: string, badgeNumber: number = 0, path?: string) => {
    return (
      <Link className={styles.iconButton} to={path}>
        <Icon style={styles.icon} name={icon} />
        {badgeNumber > 0 && <span className={styles.badge}>{badgeNumber}</span>}
      </Link>
    );
  };

  _renderIconTextMenu = (text: string) => {
    return (
      <div className={styles.viewAllMenu}>
        <Icon style={styles.viewAllIcon} name={'control-play'} onClick={() => {}} />
        <p className={styles.viewAllText}>{text}</p>
      </div>
    );
  };

  render() {
    const {
      children,
      promoMessage,
      onSearchPressed,
      isSearching,
      whishlistBadgeNumber,
      cartBadgeNumber,
      menu,
    } = this.props;

    const { isMobileMenuOpen } = this.state;
    return (
      <div className={styles.container}>
        <div className={isMobileMenuOpen ? styles.primaryMobileMenuOpen : styles.primaryMobileMenu}>
          {children}
        </div>

        <div className={styles.containerHeader}>

          <div className={styles.menuWrapper}>
            <ul className={styles.primaryMenuMobile}>
              {this._renderMenuFirstLevelItemsingle('header.new_in', menu['header.new_in'])}
              {this._renderMenuFirstLevelItemsingle('header.new_in', menu['header.new_in'])}
              {this._renderMenuFirstLevelItemsingle('header.new_in', menu['header.new_in'])}
              {this._renderMenuFirstLevelItem('header.brand', menu['header.brand'])}
              {this._renderMenuFirstLevelItemsingle('header.new_in', menu['header.new_in'])}
              {this._renderMenuFirstLevelItemsingle('header.promo', menu['header.promo'])}
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

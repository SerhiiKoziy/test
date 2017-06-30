/* @flow */
import React, { Component } from 'react';
import { isEmpty } from 'lodash';

import Icon from 'src/components/SimpleLineIcon';
import SocialLinks from 'src/components/SocialLinks';
import Text from 'src/components/TranslatedRichText';
import Button from 'src/components/Button';
import Checkbox from 'src/components/Checkbox';

import amex from 'src/images/credit_cards/amex.png';
import mastercard from 'src/images/credit_cards/mastercard.png';
import paypal from 'src/images/credit_cards/paypal.png';
import postepay from 'src/images/credit_cards/postepay.png';
import visa from 'src/images/credit_cards/visa.png';

import styles from './styles.css';

type Props = {
  menu: Menu,
};

type Menu = Array<MenuItem>;
type MenuItem = {
  title: string,
  url: string,
  target: ?string,
};

class MainFooter extends Component<void, Props, void> {
  _renderMenuLink = (menuItem: MenuItem, key: number) => {
    return (
      <li key={key}>
        <a href={menuItem.url} target={menuItem.target}>{menuItem.title}</a>
      </li>
    );
  };

  _renderFooterLinks = (menu: Menu) => {
    return (
      <div className={styles.footer_links}>
        <h2>
          <Text id={'useful_links'} />
        </h2>
        <div className={styles.footer_link_menu}>
          <ul>
            {menu.map(this._renderMenuLink)}
          </ul>
        </div>
      </div>
    );
  };

  _renderFooterContact = () => {
    return (
      <div className={styles.footer_contact}>
        <h2><Text id={'restiamo_in_contatto'} /></h2>
        <SocialLinks />

        {this._renderFooterNewsletter()}
      </div>
    );
  };

  _renderFooterNewsletter = () => {
    return (
      <div className={styles.newsletterFormWrapper}>
        <div className={styles.iconWrapper}>
          <Icon name={'envelope'} />
        </div>

        <form action="#" className={styles.newsletterForm}>
          <input
            type="email"
            className={styles.inputText}
            placeholder={'Inserisci la mail e iscriviti alla newsletter'}
          />

          <div className={styles.newsLetterCheckbox}>
            <Checkbox label={'Accetto di ricevere la newsletter di Privategriffe'} />
          </div>

          <div
            className={styles.submit}
            onClick={() => {
              console.log('submit newsletter');
            }}
          >
            <Icon name={'control-play'} />
          </div>
        </form>
      </div>
    );
  };

  _renderFooterAssistenzaClienti = () => {
    return (
      <div className={styles.footer_assistenza}>
        <h2><Text id={'assistenza_clienti'} /></h2>
        <div className={styles.p}>
          <Text id={'informazioni_spedizioni_e_pagamenti'} />
          {' '}
          <a href="mailto:help@privategriffe.com">help@privategriffe.com</a>
          {' '}
          oppure
          {' '}
          <a href="tel:0284259890">02 84.25.98.90</a>
          .
        </div>
        <div className={styles.p}>
          <Text id={'leggi_le_risposte_alle'} /><br />
          <a href="#"><strong><Text id={'domande_frequenti'} /></strong></a>
        </div>
      </div>
    );
  };

  render() {
    const { menu } = this.props;
    return (
      <footer className={styles.main_footer}>
        <div className={styles.container}>
          {this._renderFooterLinks(menu)}
          {this._renderFooterContact()}
          {this._renderFooterAssistenzaClienti()}
        </div>

        <div className={styles.container}>
          <div className={styles.credit_cards}>
            <img src={mastercard} alt="{'Mastercard'}" />
            <img src={visa} alt="{'Visa'}" />
            <img src={amex} alt="{'American Express'}" />
            <img src={paypal} alt="{'PayPal'}" />
            <img src={postepay} alt="{'PostePay'}" />
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.copyright}>
            <p>
              Copyright 2012 - 2016 PRIVATEGRIFFE S.p.a. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, laborum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt doloremque debitis quos accusantium quo fugit tempore rem, sapiente qui repellendus.
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default MainFooter;

/* @flow */
import React, { Component } from 'react';
import { isEmpty } from 'lodash';

import Icon from 'src/components/SimpleLineIcon';

import styles from './styles.css';

type Props = {};

class SocialLinks extends Component<void, Props, void> {
  render() {
    var networks = [
      {
        title: 'Facebook',
        url: 'https://facebook.com',
        icon: 'social-facebook',
        color: '#3b5999',
      },
      {
        title: 'Twitter',
        url: 'https://twitter.com',
        icon: 'social-twitter',
        color: '#55acee',
      },
    ];

    return (
      <div id="socialLinks" className={styles.socialLinks}>
        {networks.map((social, index) => {
          return (
            <a
              key={index}
              className={styles.socialLink}
              href={social.url}
              title={social.title}
              style={{ backgroundColor: social.color }}
            >
              <Icon name={social.icon} />
            </a>
          );
        })}
      </div>
    );
  }
}

export default SocialLinks;

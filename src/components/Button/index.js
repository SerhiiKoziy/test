/* @flow */
import React, { Element } from 'react';
import classNames from 'classnames';

import styles from './styles.css';

type Props = {
  text: any,
  onPressed?: () => any,
  style?: string,
  disabled?: boolean,
  reverse?: boolean,
};

const Button = (props: Props): Element<any> => {
  const { reverse, text, onPressed, style, disabled, ...otherProps } = props;
  return (
    <div
      className={classNames(
        disabled ? styles.containerDisabled : reverse ? styles.containerReverse : styles.container,
        style
      )}
      {...otherProps}
      onClick={() => (!disabled && onPressed ? onPressed() : undefined)}
    >
      <span className={styles.text}>
        {text}
      </span>
    </div>
  );
};

export default Button;

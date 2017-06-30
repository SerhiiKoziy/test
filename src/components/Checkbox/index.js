/* @flow */
import React, { Element } from 'react';
import styles from './styles.css';

type Props = {
  label?: string,
};

const Checkbox = (props: Props): Element<any> => {
  const { label } = props;
  return (
    <label className={styles.container}>
      <input className={styles.input} type={'checkbox'} {...props} />
      <div className={styles.box} tabIndex={0} />
      {label && <p className={styles.label}>{label}</p>}
    </label>
  );
};

export default Checkbox;

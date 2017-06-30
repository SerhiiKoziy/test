/* @flow */
import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Checkbox from './';

storiesOf('Checkbox', module)
  .add('with label', () => <Checkbox onClick={action('clicked')} label={'Hello Checkbox'} />)
  .add('checked', () => (
    <Checkbox onClick={action('clicked')} label={'Hello Checkbox'} checked={true} />
  ));

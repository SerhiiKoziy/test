import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { text, object } from '@kadira/storybook-addon-knobs';

import TranslatedRichText from './index';

storiesOf('TranslatedRichText', module).add(`Valid Id`, () => (
  <TranslatedRichText id={'ready'} defaultMessage={`default message`} description={''} />
));

storiesOf('TranslatedRichText', module).add(`Invalid Id`, () => (
  <TranslatedRichText id={'ready2'} defaultMessage={`default message`} description={''} />
));

storiesOf('TranslatedRichText', module).add(`withKnobs`, () => (
  <TranslatedRichText
    id={text('id', 'default')}
    defaultMessage={text(
      'defaultMessage',
      `Hello **{name}**, you have {unreadCount, number} {unreadCount, plural, one {message} other {messages} }`
    )}
    values={object('values', { name: 'Bob', unreadCount: 2 })}
    description={text('description', '')}
  />
));

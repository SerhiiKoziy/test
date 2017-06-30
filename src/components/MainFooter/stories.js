import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { text, boolean, number } from '@kadira/storybook-addon-knobs';

import MainFooter from './index';

import { IntlProvider } from 'react-intl';
import enIntl from 'src/locales/en.json';
import TranslatedRichText from './index';
const IntlDecorator = story => <IntlProvider locale="en" messages={enIntl}>{story()}</IntlProvider>;

import menu from './mainfooter.mock.json';

storiesOf('MainFooter', module)
  .addDecorator(IntlDecorator)
  .add(`default`, () => <MainFooter menu={menu} />);

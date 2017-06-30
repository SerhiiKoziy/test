import React from 'react';
import { configure, addDecorator } from '@kadira/storybook';
import { withKnobs } from '@kadira/storybook-addon-knobs';
import backgrounds from "react-storybook-addon-backgrounds";
import { addLocaleData, IntlProvider } from 'react-intl';
import enLocale from 'react-intl/locale-data/en';
import itLocale from 'react-intl/locale-data/it';

import { getTranslations } from 'src/utils/language';
import customLanguages from './languages.mock'
import 'src/styles/globals.css';
import 'src/styles/select.css';

addLocaleData([...enLocale, ...itLocale]);

const req = require.context('../src/components', true, /.stories.js$/);


function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

const intlDecorator = story => <IntlProvider locale={'it'} messages={getTranslations('it', customLanguages)}>{story()}</IntlProvider>;

addDecorator(withKnobs);
addDecorator(backgrounds([
    { name: "gray", value: "#aaaaaa", default: true },
    { name: "white", value: "#ffffff" },
    { name: "black", value: "#000000" },
  ]));
addDecorator(intlDecorator);


 
configure(loadStories, module);

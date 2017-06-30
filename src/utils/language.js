/* @flow */
import enIntl from 'src/locales/en.json';
import itIntl from 'src/locales/it.json';

const languages = {
  en: enIntl,
  it: itIntl,
};

let currentLanguage = 'it';

export type Languages = 'en' | 'it';

export const setCurrentLanguage = (language: Languages) => {
  currentLanguage = language;
};

export const getCurrentLanguage = (): Languages => {
  return currentLanguage;
};

export const languageFromHost = (host: string): ?Languages => {
  const hostnameArray = host.split('.');
  if (hostnameArray[0] === 'en' || hostnameArray[0] === 'it') return hostnameArray[0];
};

const flattenMessages = (nestedMessages?: Object, prefix = '') => {
  if (!nestedMessages) return {};

  return Object.keys(nestedMessages).reduce((messages, key) => {
    // $FlowFixMe
    let value = nestedMessages[key];
    let prefixedKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === 'string') {
      messages[prefixedKey] = value;
    } else {
      Object.assign(messages, flattenMessages(value, prefixedKey));
    }

    return messages;
  }, {});
};

export const getTranslations = (language: 'it' | 'en', updatedTranslations?: Object): Object => {
  return { ...flattenMessages(languages[language]), ...flattenMessages(updatedTranslations) };
};

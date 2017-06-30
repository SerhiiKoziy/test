import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { text, boolean } from '@kadira/storybook-addon-knobs';

import Picture from './index';

storiesOf('Picture', module).add(`enabledSpinner`, () => (
  <Picture
    sources={[
      {
        maxWidth: 375,
        srcset: 'https://dummyimage.com/375x200&text=1x-375x200 1x, http://dummyimage.com/375x200&text=2x-375x200 2x',
      },
      {
        maxWidth: 768,
        srcset: 'https://dummyimage.com/768x400&text=1x-768x400 1x, http://dummyimage.com/768x400&text=2x-768x400 2x',
      },
      {
        maxWidth: 1366,
        srcset: 'https://dummyimage.com/1366x800&text=1x-1366x800 1x, http://dummyimage.com/1366x800&text=2x-1366x800 2x',
      },
      {
        maxWidth: 1920,
        srcset: 'https://dummyimage.com/1920x1080&text=1x-1920x1080 1x, http://dummyimage.com/1920x1080&text=2x-1920x1080 2x',
      },
    ]}
    defaultSrc={'https://dummyimage.com/1920x820&text=default-1920x820'}
    alt={'test'}
    enableSpinner={true}
  />
));

storiesOf('Picture', module).add(`withKnobs`, () => (
  <Picture
    // array of object currently doesn't work with knobs
    sources={[
      {
        maxWidth: 375,
        srcset: 'https://dummyimage.com/375x200&text=1x-375x200 1x, http://dummyimage.com/375x200&text=2x-375x200 2x',
      },
      {
        maxWidth: 768,
        srcset: 'https://dummyimage.com/768x400&text=1x-768x400 1x, http://dummyimage.com/768x400&text=2x-768x400 2x',
      },
      {
        maxWidth: 1366,
        srcset: 'https://dummyimage.com/1366x800&text=1x-1366x800 1x, http://dummyimage.com/1366x800&text=2x-1366x800 2x',
      },
      {
        maxWidth: 1920,
        srcset: 'https://dummyimage.com/1920x1080&text=1x-1920x1080 1x, http://dummyimage.com/1920x1080&text=2x-1920x1080 2x',
      },
    ]}
    defaultSrc={text('defaultSrc', 'http://dummyimage.com/1920x820&text=default-1920x820')}
    alt={text('alt', 'text')}
    enableSpinner={boolean('enableSpinner')}
  />
));

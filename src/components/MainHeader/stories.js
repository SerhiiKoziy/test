import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { text, boolean, number } from '@kadira/storybook-addon-knobs';
import StoryRouter from 'storybook-router';

import MainHeader from './index';

import menu from './menu.mock.json';

storiesOf('MainHeader', module)
  .addDecorator(StoryRouter())
  .add(`default`, () =>
    <MainHeader menu={menu} onSearchPressed={action('onSearchPressed')} isSearching={false} />
  );

storiesOf('MainHeader', module)
  .addDecorator(StoryRouter())
  .add(`isSearching`, () =>
    <MainHeader menu={menu} onSearchPressed={action('onSearchPressed')} isSearching={true} />
  );

storiesOf('MainHeader', module)
  .addDecorator(StoryRouter())
  .add(`promo`, () =>
    <MainHeader
      menu={menu}
      promoMessage={'Inserisci il codice SPRING 17 per aver il 10% di sconto - Solo fino al 20/2'}
    />
  );

storiesOf('MainHeader', module)
  .addDecorator(StoryRouter())
  .add(`withKnobs`, () =>
    <MainHeader
      menu={menu}
      promoMessage={text('promoMessage', '')}
      isSearching={boolean('isSearching', false)}
      whishlistBadgeNumber={number('whishlistBadgeNumber', 0)}
      cartBadgeNumber={number('cartBadgeNumber', 0)}
    />
  );

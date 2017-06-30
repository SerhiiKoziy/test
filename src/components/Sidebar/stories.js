import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { text, boolean, number } from '@kadira/storybook-addon-knobs';
import StoryRouter from 'storybook-router';

import Sidebar from './index';

import menu from './menu.mock.json';

storiesOf('Sidebar', module)
  .addDecorator(StoryRouter())
  .add(`default`, () =>
    <Sidebar menu={menu} onSearchPressed={action('onSearchPressed')} isSearching={false} />
  );

storiesOf('Sidebar', module)
  .addDecorator(StoryRouter())
  .add(`isSearching`, () =>
    <Sidebar menu={menu} onSearchPressed={action('onSearchPressed')} isSearching={true} />
  );

storiesOf('Sidebar', module)
  .addDecorator(StoryRouter())
  .add(`promo`, () =>
    <Sidebar
      menu={menu}
      promoMessage={'Inserisci il codice SPRING 17 per aver il 10% di sconto - Solo fino al 20/2'}
    />
  );

storiesOf('Sidebar', module)
  .addDecorator(StoryRouter())
  .add(`withKnobs`, () =>
    <Sidebar
      menu={menu}
      promoMessage={text('promoMessage', '')}
      isSearching={boolean('isSearching', false)}
      whishlistBadgeNumber={number('whishlistBadgeNumber', 0)}
      cartBadgeNumber={number('cartBadgeNumber', 0)}
    />
  );

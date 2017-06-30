import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Button from './index';

storiesOf('Button', module).add(`default`, () => (
  <Button text={'registrati'} onPressed={action('onPressed')} />
));

import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { text, boolean, number } from '@kadira/storybook-addon-knobs';

import SocialLinks from './index';

storiesOf('SocialLinks', module).add(`default`, () => <SocialLinks />);

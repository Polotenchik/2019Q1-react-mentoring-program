import React from 'react';
import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';

import { Welcome } from '@storybook/react/demo';
import Rating from './rating/rating';
import Button from './button/button';
import Label from './label/label';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('default', () => <Button content='search' btnRed btnClick={ null } />);

storiesOf('Rating', module)
  .add('default', () => <Rating value={3.4} />);

storiesOf('Label', module)
  .add('with info', withInfo({})(() => <Label labelBlack labelBold labelUC content={ 'Netflixroulette' } />));

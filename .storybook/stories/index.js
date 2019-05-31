import React from 'react';
import { storiesOf } from '@storybook/react';
import CustomButton from '../../src/index';

storiesOf("Custom Button", module)
  .addWithJSX("simple", () => <CustomButton />);

import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import QuoteBlock from './QuoteBlock';


export default {
  title: 'Global/Components/QuoteBlock',
  component: QuoteBlock,
}

const Template = args => <QuoteBlock {...args} />;
export const Primary = Template.bind({});
Primary.args = { 
  quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem ridiculus ipsum ac neque, quis morbi. Maecenas ullamcorper iaculis ipsum porttitor. In vitae orci sapien egestas quis senectus.',
};

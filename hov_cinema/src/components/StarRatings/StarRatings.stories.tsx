import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {StarRatings} from './StarRatings';

const meta: Meta<typeof StarRatings> = {
  component: StarRatings,
};

export default meta;

type Story = StoryObj<typeof StarRatings>;

export const Basic: Story = {args: {}};

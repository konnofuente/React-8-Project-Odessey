import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {Star} from './Star';

const meta: Meta<typeof Star> = {
  component: Star,
};

export default meta;

type Story = StoryObj<typeof Star>;

export const Basic: Story = {args: {}};

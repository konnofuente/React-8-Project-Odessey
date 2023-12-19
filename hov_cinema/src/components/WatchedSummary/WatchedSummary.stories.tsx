import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {WatchedSummary} from './WatchedSummary';

const meta: Meta<typeof WatchedSummary> = {
  component: WatchedSummary,
};

export default meta;

type Story = StoryObj<typeof WatchedSummary>;

export const Basic: Story = {args: {}};

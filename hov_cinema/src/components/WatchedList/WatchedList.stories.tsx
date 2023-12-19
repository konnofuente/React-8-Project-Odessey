import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {WatchedList} from './WatchedList';

const meta: Meta<typeof WatchedList> = {
  component: WatchedList,
};

export default meta;

type Story = StoryObj<typeof WatchedList>;

export const Basic: Story = {args: {}};

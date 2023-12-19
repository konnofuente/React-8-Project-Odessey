import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {WatchedListTile} from './WatchedListTile';

const meta: Meta<typeof WatchedListTile> = {
  component: WatchedListTile,
};

export default meta;

type Story = StoryObj<typeof WatchedListTile>;

export const Basic: Story = {args: {}};

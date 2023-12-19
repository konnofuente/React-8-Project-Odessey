import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {WatchedListBox} from './WatchedListBox';

const meta: Meta<typeof WatchedListBox> = {
  component: WatchedListBox,
};

export default meta;

type Story = StoryObj<typeof WatchedListBox>;

export const Basic: Story = {args: {}};

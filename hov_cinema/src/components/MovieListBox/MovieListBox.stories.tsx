import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {MovieListBox} from './MovieListBox';

const meta: Meta<typeof MovieListBox> = {
  component: MovieListBox,
};

export default meta;

type Story = StoryObj<typeof MovieListBox>;

export const Basic: Story = {args: {}};

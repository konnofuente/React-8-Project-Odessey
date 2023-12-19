import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {MovieListTile} from './MovieListTile';

const meta: Meta<typeof MovieListTile> = {
  component: MovieListTile,
};

export default meta;

type Story = StoryObj<typeof MovieListTile>;

export const Basic: Story = {args: {}};

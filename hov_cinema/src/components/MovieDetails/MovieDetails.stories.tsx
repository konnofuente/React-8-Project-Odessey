import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {MovieDetails} from './MovieDetails';

const meta: Meta<typeof MovieDetails> = {
  component: MovieDetails,
};

export default meta;

type Story = StoryObj<typeof MovieDetails>;

export const Basic: Story = {args: {}};

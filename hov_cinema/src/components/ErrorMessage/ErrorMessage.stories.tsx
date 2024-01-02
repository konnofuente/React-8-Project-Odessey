import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {ErrorMessage} from './ErrorMessage';

const meta: Meta<typeof ErrorMessage> = {
  component: ErrorMessage,
};

export default meta;

type Story = StoryObj<typeof ErrorMessage>;

export const Basic: Story = {args: {}};
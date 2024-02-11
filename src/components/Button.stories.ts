import type { Meta, StoryObj } from '@storybook/react';

import GradientButton from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: GradientButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof GradientButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    buttonText: 'Bibi',
  },
};

export const Secondary: Story = {
  args: {
    buttonText: 'Dudu',
  },
};

export const Large: Story = {
  args: {
    buttonText: 'Aiai',
  },
};

export const Small: Story = {
  args: {
    buttonText: 'Button',
  },
};

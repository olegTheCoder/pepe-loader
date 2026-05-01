import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PepeLoader } from './PepeLoader';

const meta: Meta<typeof PepeLoader> = {
  title: 'PepeLoader',
  component: PepeLoader,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' },
  },
  argTypes: {
    size: {
      control: { type: 'range', min: 50, max: 500, step: 10 },
    },
    speed: {
      control: { type: 'range', min: 0.1, max: 4, step: 0.1 },
    },
    textColor: { control: 'color' },
    fontWeight: {
      control: { type: 'range', min: 100, max: 900, step: 100 },
    },
    burstStrokeWidth: {
      control: { type: 'range', min: 2, max: 20, step: 1 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof PepeLoader>;

export const Default: Story = {
  args: {},
};

export const Small: Story = {
  args: { size: 100 },
};

export const Large: Story = {
  args: { size: 400 },
};

export const RedBurst: Story = {
  args: { colors: ['#FF0000', '#FF0000', '#FF0000'] },
};

export const BlueBurst: Story = {
  args: { colors: ['#0066FF', '#0066FF', '#0066FF'] },
};

export const GreenBurst: Story = {
  args: { colors: ['#00CC66', '#00CC66', '#00CC66'] },
};

export const PurpleBurst: Story = {
  args: { colors: ['#9933FF', '#9933FF', '#9933FF'] },
};

export const OrangeBurst: Story = {
  args: { colors: ['#FF6600', '#FF6600', '#FF6600'] },
};

export const CustomColors: Story = {
  args: { colors: ['#FF3366', '#FFD700', '#00E5FF'] },
};

export const PastelColors: Story = {
  args: { colors: ['#FF9AA2', '#FFB7B2', '#B5EAD7'] },
};

export const WhiteText: Story = {
  args: { textColor: '#FFFFFF' },
};

export const ColoredText: Story = {
  args: { textColor: '#FFD700' },
};

export const CustomTexts: Story = {
  args: { texts: ['BOOM', 'BANG', 'POW'] },
};

export const RussianTexts: Story = {
  args: { texts: ['УРА', 'БАХ', 'БУМ'] },
};

export const EnglishTexts: Story = {
  args: { texts: ['GO', 'FAST', 'WIN'] },
};

export const LargeFont: Story = {
  args: { fontSizes: [48, 42, 46] },
};

export const SmallFont: Story = {
  args: { fontSizes: [24, 20, 22] },
};

export const ThinFont: Story = {
  args: { fontWeight: 300 },
};

export const HalfSpeed: Story = {
  args: { speed: 0.5 },
};

export const DoubleSpeed: Story = {
  args: { speed: 2 },
};

export const TripleSpeed: Story = {
  args: { speed: 3 },
};

export const ThickStroke: Story = {
  args: { burstStrokeWidth: 14 },
};

export const ThinStroke: Story = {
  args: { burstStrokeWidth: 4 },
};

export const Combined: Story = {
  args: {
    size: 200,
    colors: ['#FF3366', '#FFD700', '#00E5FF'],
    texts: ['GO', 'FAST', 'GO'],
    speed: 1.5,
    textColor: '#FFFFFF',
    fontSizes: [28, 28, 28],
  },
};

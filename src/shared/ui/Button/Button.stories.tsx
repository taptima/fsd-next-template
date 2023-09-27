import type { Meta, StoryObj } from '@storybook/react';
import UserIcon from 'shared/assets/icons/next.svg';
import InfoIcon from 'shared/assets/icons/vercel.svg';
import colors from 'shared/styles/colors.module.scss';
import Button from './index';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

const text = 'SomeText';

export const Primary: Story = {
    args: {
        children: text,
    },
};

export const Secondary: Story = {
    args: {
        children: text,
        variant: 'secondary',
    },
};

export const WithStartIcon: Story = {
    args: {
        children: text,
        startIcon: <InfoIcon width={20} />,
    },
};

export const WithEndIcon: Story = {
    args: {
        children: text,
        endIcon: <UserIcon width={20} />,
    },
};

export const WithStartAndEndIcons: Story = {
    args: {
        children: text,
        startIcon: <InfoIcon width={16} fill={colors.primary500} />,
        endIcon: <UserIcon width={16} fill={colors.primary300} />,
    },
};

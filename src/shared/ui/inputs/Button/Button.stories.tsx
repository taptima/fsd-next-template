import type { Meta, StoryObj } from '@storybook/nextjs';
import NextIcon from 'shared/assets/icons/next.svg';
import VercelIcon from 'shared/assets/icons/vercel.svg';
import { colors } from 'shared/styles/colors';
import { Button } from './index';

const meta: Meta<typeof Button> = {
    title: 'shared/inputs/Button',
    component: Button,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

const text = 'SomeText';

const COMMON_PROPS: Story['args'] = {
    children: text,
    disabled: false,
};

export const Primary: Story = {
    args: {
        ...COMMON_PROPS,
    },
};

export const Secondary: Story = {
    args: {
        ...COMMON_PROPS,
        variant: 'secondary',
    },
};

export const WithStartIcon: Story = {
    args: {
        ...COMMON_PROPS,
        startIcon: <NextIcon width={20} />,
    },
};

export const WithEndIcon: Story = {
    args: {
        ...COMMON_PROPS,
        endIcon: <VercelIcon width={20} />,
    },
};

export const WithStartAndEndIcons: Story = {
    args: {
        ...COMMON_PROPS,
        startIcon: <NextIcon width={16} fill={colors.neutral0} />,
        endIcon: <VercelIcon width={16} fill={colors.primary20} />,
    },
};

export const PrimaryLoading: Story = {
    args: {
        ...COMMON_PROPS,
        isLoading: true,
    },
};

export const SecondaryLoading: Story = {
    args: {
        ...COMMON_PROPS,
        variant: 'secondary',
        isLoading: true,
    },
};

import type { Meta, StoryObj } from '@storybook/nextjs';
import { ButtonLink } from './index';

const meta: Meta<typeof ButtonLink> = {
    title: 'shared/navigation/ButtonLink',
    component: ButtonLink,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ButtonLink>;

const text = 'SomeText';

const COMMON_PROPS: Story['args'] = {
    children: text,
    href: '/',
};

export const Primary: Story = {
    args: {
        ...COMMON_PROPS,
        variant: 'Primary',
    },
};

export const Secondary: Story = {
    args: {
        ...COMMON_PROPS,
        variant: 'Secondary',
    },
};

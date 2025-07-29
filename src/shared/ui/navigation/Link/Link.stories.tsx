import type { Meta, StoryObj } from '@storybook/nextjs';
import { Link } from './index';

const meta: Meta<typeof Link> = {
    title: 'shared/navigation/Link',
    component: Link,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Link>;

const text = 'SomeText';

const COMMON_PROPS: Story['args'] = {
    children: text,
    href: '/',
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

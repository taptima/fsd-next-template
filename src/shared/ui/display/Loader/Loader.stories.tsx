import type { Decorator, Meta, StoryObj } from '@storybook/nextjs';
import { Loader } from './index';

const LayoutDecorator: Decorator = (Story, context) => {
    return (
        <div
            style={{
                padding: '20px 0',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            {Story(context)}
        </div>
    );
};

const meta: Meta<typeof Loader> = {
    title: 'shared/display/Loader',
    component: Loader,
    tags: ['autodocs'],
    decorators: [LayoutDecorator],
};

export default meta;

type Story = StoryObj<typeof Loader>;

export const Current: Story = {
    args: {
        variant: 'Current',
    },
};

export const StrokeWidth8: Story = {
    args: {
        strokeWidth: 8,
    },
};

export const Size40: Story = {
    args: {
        size: 40,
    },
};

export const Size20: Story = {
    args: {
        size: 20,
    },
};

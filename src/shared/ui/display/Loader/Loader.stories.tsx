import type { Decorator, Meta, StoryContext, StoryFn, StoryObj } from '@storybook/react';
import colors from 'shared/styles/colors.module.scss';
import { Loader } from './index';

const LayoutDecorator: Decorator = (Story: StoryFn, context: StoryContext) => {
    const { args } = context;
    const { variant } = args;

    return (
        <div
            style={{
                padding: '20px 0',
                display: 'flex',
                justifyContent: 'center',
                borderRadius: 8,
                backgroundColor: variant === 'white' ? colors.primary500 : colors.neutral0,
            }}
        >
            <Story />
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

export const Primary: Story = {
    args: {
        variant: 'primary',
    },
};

export const White: Story = {
    args: {
        variant: 'white',
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

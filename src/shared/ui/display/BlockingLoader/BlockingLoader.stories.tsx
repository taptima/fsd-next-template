import type { Decorator, Meta, StoryFn, StoryObj } from '@storybook/react';
import { BlockingLoader } from './index';

const LayoutDecorator: Decorator = (Story: StoryFn) => {
    return (
        <div style={{ height: 500 }}>
            <Story />
        </div>
    );
};

const meta: Meta<typeof BlockingLoader> = {
    title: 'shared/display/BlockingLoader',
    component: BlockingLoader,
    tags: ['autodocs'],
    decorators: [LayoutDecorator],
};

export default meta;

type Story = StoryObj<typeof BlockingLoader>;

export const Primary: Story = {
    args: {},
};

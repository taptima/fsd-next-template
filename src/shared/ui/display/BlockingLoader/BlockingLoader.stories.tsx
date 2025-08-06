import type { Decorator, Meta, StoryObj } from '@storybook/nextjs';
import { BlockingLoader } from './index';

const LayoutDecorator: Decorator = (Story, context) => {
    return <div style={{ height: 500 }}>{Story(context)}</div>;
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

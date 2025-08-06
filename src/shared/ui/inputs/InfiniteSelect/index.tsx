import type { BaseOptionType, DefaultOptionType } from 'antd/es/select';
import type { UIEventHandler } from 'react';
import { Select, SelectProps } from 'shared/ui/inputs/Select';

export const TRIGGER_OFFSET_IN_PX = 120;

export type InfiniteSelectProps<
    Form = unknown,
    Option extends DefaultOptionType | BaseOptionType = DefaultOptionType,
> = SelectProps<Form, Option> & {
    onScrollToBottom?: () => Promise<unknown>;
};

export function InfiniteSelect<
    Form,
    Option extends DefaultOptionType | BaseOptionType = DefaultOptionType,
>(props: InfiniteSelectProps<Form, Option>) {
    const { onScrollToBottom, loading, ...restProps } = props;

    const handleScroll: UIEventHandler<HTMLDivElement> = async (event) => {
        const target = event.target as HTMLDivElement;
        const bottomOffset = target.scrollHeight - target.scrollTop - target.offsetHeight;

        if (!loading && bottomOffset <= TRIGGER_OFFSET_IN_PX) {
            onScrollToBottom?.();
        }
    };

    return <Select<Form, Option> loading={loading} onPopupScroll={handleScroll} {...restProps} />;
}

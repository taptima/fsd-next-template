import { StoreActions } from 'shared/types/storeActions';

interface ActionParamsProps<Schema extends StoreActions<object>> {
    callback: Schema | Partial<Schema> | ((state: Schema) => Schema | Partial<Schema>);
    value: Schema[keyof Omit<Schema, 'actions'>];
    type: keyof Schema['actions'];
    replace?: boolean;
}

export const actionParams = <Schema extends StoreActions<object>>({
    callback,
    value,
    type,
    replace = false,
}: ActionParamsProps<Schema>) =>
    [
        callback,
        replace,
        {
            type,
            value,
        },
    ] as const;

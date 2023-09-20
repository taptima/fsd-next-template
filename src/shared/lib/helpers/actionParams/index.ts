import { StoreActions } from 'shared/types/storeActions';

interface ActionParamsProps<Schema extends StoreActions<object>, Value = unknown> {
    callback: Schema | Partial<Schema> | ((state: Schema) => Schema | Partial<Schema>);
    value: Value;
    type: keyof Schema['actions'];
    replace?: boolean;
}

export const actionParams = <Schema extends StoreActions<object>, Value = unknown>({
    callback,
    value,
    type,
    replace = false,
}: ActionParamsProps<Schema, Value>) =>
    [
        callback,
        replace,
        {
            type,
            value,
        },
    ] as const;

import { DefaultActions } from '../../../types/defaultActions';

export const actionParams = <Schema extends DefaultActions<unknown>>(
    value: Schema[keyof Omit<Schema, 'actions'>],
    type: keyof Schema['actions'],
    replace: boolean = false,
) =>
    [
        replace,
        {
            type,
            value,
        },
    ] as const;

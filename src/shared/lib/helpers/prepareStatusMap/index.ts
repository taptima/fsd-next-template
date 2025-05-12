import type { StatusProps, StatusVariant } from 'shared/ui/display/Status';

type Entry<T extends string> = {
    status: T;
    variant: StatusVariant;
};

type StatusMap = {
    [status: string]: StatusProps;
};

export const prepareStatusMap = <T extends string>(
    textMap: Record<T, string>,
    entries: Entry<T>[],
) => {
    return entries.reduce<StatusMap>((acc, current) => {
        const { status, variant } = current;

        return {
            ...acc,
            [status]: {
                variant,
                text: textMap[status],
            },
        };
    }, {});
};

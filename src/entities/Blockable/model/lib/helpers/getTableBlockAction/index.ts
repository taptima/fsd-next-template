import type { ActionProps } from 'shared/ui/display/Table/ui/Actions/Action';
import { Blockable } from 'entities/Blockable/model/types/blockable';

type Parameters = Partial<ActionProps> & {
    blockable: Blockable;
    lockAction: () => void;
    unlockAction: () => void;
};

export const getTableBlockAction = (parameters: Parameters): ActionProps => {
    const { blockable, lockAction, unlockAction, ...restProps } = parameters;
    const { banned } = blockable;

    if (banned) {
        return {
            variant: 'unlock',
            onClick: unlockAction,
            ...restProps,
        };
    }

    return {
        variant: 'lock',
        onClick: lockAction,
        ...restProps,
    };
};

import type { ButtonProps } from 'shared/ui/inputs/Button';
import LockIcon from 'shared/assets/icons/lock.svg';
import UnlockIcon from 'shared/assets/icons/lock-open.svg';
import { Blockable } from 'entities/Blockable';

type Parameters = {
    blockable: Blockable;
    lockAction: () => void;
    unlockAction: () => void;
};
export const getModalBlockAction = (parameters: Parameters): ButtonProps => {
    const { blockable, lockAction, unlockAction } = parameters;
    const { banned } = blockable ?? {};

    if (banned) {
        return {
            children: 'Разблокировать',
            icon: UnlockIcon({ width: 16 }),
            onClick: unlockAction,
        };
    }

    return {
        children: 'Заблокировать',
        icon: LockIcon({ width: 16 }),
        onClick: lockAction,
    };
};

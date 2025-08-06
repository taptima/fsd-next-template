import type { IconComponent } from 'shared/types/icon';
import LockIcon from 'shared/assets/icons/lock.svg';
import UnlockIcon from 'shared/assets/icons/lock-open.svg';
import PencilIcon from 'shared/assets/icons/pencil.svg';
import TrashIcon from 'shared/assets/icons/trash-2.svg';
import { colors } from 'shared/styles/colors';

export type Variant = 'delete' | 'edit' | 'lock' | 'unlock';

type Action = {
    tooltipText: string;
    Icon: IconComponent;
    fill: string;
};

export const MAP_VARIANT_TO_ACTION: Record<Variant, Action> = {
    delete: {
        tooltipText: 'Удалить',
        Icon: TrashIcon,
        fill: colors.error900,
    },
    edit: {
        tooltipText: 'Изменить',
        Icon: PencilIcon,
        fill: colors.primary900,
    },
    lock: {
        tooltipText: 'Заблокировать',
        Icon: LockIcon,
        fill: colors.primary900,
    },
    unlock: {
        tooltipText: 'Разблокировать',
        Icon: UnlockIcon,
        fill: colors.primary900,
    },
};

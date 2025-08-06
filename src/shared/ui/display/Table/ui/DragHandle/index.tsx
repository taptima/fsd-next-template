import type { FC } from 'react';
import AlignJustifyIcon from 'shared/assets/icons/align-justify.svg';
import { colors } from 'shared/styles/colors';
import { useSortableRowContext } from 'shared/ui/display/Table/ui/SortableRow';
import { Button } from 'shared/ui/inputs/Button';
import styles from './styles.module.scss';

export const DragHandle: FC = () => {
    const { setActivatorNodeRef, listeners } = useSortableRowContext();

    return (
        <Button
            ref={setActivatorNodeRef}
            type="text"
            padding="Icon"
            icon={<AlignJustifyIcon width={16} fill={colors.neture400} />}
            className={styles.button}
            {...listeners}
        />
    );
};

import type { FC, PropsWithChildren } from 'react';
import { Card as BaseCard } from 'shared/ui/surfaces/Card';
import { Toolbar, ToolbarProps } from 'widgets/Toolbar';
import { Additional, AdditionalProps } from './Additional';
import styles from './styles.module.scss';

export type CardProps = PropsWithChildren & {
    toolbarProps: ToolbarProps;
    additionalProps?: AdditionalProps;
};

export const Card: FC<CardProps> = (props) => {
    const { children, toolbarProps, additionalProps } = props;

    return (
        <BaseCard padding="None" className={styles.wrapper}>
            <Toolbar {...toolbarProps} cardProps={{ padding: 'Medium' }} />
            {additionalProps && <Additional {...additionalProps} />}
            {children}
        </BaseCard>
    );
};

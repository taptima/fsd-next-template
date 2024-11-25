import type { FC, PropsWithChildren } from 'react';
import BaseForm, { FormProps } from 'antd/es/form';
import clsx from 'clsx';
import styles from './styles.module.scss';

type Props = PropsWithChildren & FormProps;

export const Form: FC<Props> = (props) => {
    const { children, className, ...restProps } = props;

    return (
        <BaseForm className={clsx(styles.form, className)} {...restProps}>
            {children}
        </BaseForm>
    );
};

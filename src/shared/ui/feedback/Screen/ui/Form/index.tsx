import type { FC } from 'react';
import clsx from 'clsx';
import { Form as BaseForm, FormProps } from 'features/form/Form';
import styles from './styles.module.scss';

type Props = FormProps;

export const Form: FC<Props> = (props) => {
    const { children, className, ...restProps } = props;

    return (
        <BaseForm className={clsx(styles.form, className)} {...restProps}>
            {children}
        </BaseForm>
    );
};

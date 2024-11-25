import type { PropsWithChildren } from 'react';
import BaseForm, { FormProps } from 'antd/es/form/Form';
import clsx from 'clsx';
import { Inline } from './ui/Inline';
import styles from './styles.module.scss';

type Props = PropsWithChildren & FormProps;

export function Form(props: Props) {
    const { children, className, ...restProps } = props;

    return (
        <BaseForm className={clsx(styles.form, className)} {...restProps}>
            {children}
        </BaseForm>
    );
}

Form.Inline = Inline;

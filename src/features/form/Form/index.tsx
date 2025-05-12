import type { PropsWithChildren } from 'react';
import BaseForm, { FormProps as BaseFormProps } from 'antd/es/form/Form';
import clsx from 'clsx';
import { Inline } from './ui/Inline';
import styles from './styles.module.scss';

export type FormProps = PropsWithChildren & BaseFormProps;

export function Form(props: FormProps) {
    const { children, className, ...restProps } = props;

    return (
        <BaseForm className={clsx(styles.form, className)} {...restProps}>
            {children}
        </BaseForm>
    );
}

Form.Inline = Inline;

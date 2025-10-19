import { FC, ReactNode, useId } from 'react';
import clsx from 'clsx';
import type { Classname, Classnames } from 'shared/types/styles';
import styles from './styles.module.scss';

export type FieldWrapperProps = Classname &
    Classnames<'inputWrapper' | 'label'> & {
        label: string;
        inputId: string;
        error?: string;
        children?: ReactNode;
    };

export const FieldWrapper: FC<FieldWrapperProps> = (props) => {
    const { children, className, inputWrapperClassname, inputId, labelClassname, label, error } =
        props;
    const errorId = useId();
    const hasError = !!error;

    return (
        <div className={className}>
            <div
                className={clsx(
                    styles.wrapper,
                    {
                        [styles.wrapperError]: hasError,
                    },
                    inputWrapperClassname,
                )}
            >
                <div className={styles.content}>
                    {children}

                    <label
                        className={clsx(
                            styles.label,
                            {
                                [styles.errorLabel]: hasError,
                            },
                            labelClassname,
                        )}
                        htmlFor={inputId}
                    >
                        {label}
                    </label>
                </div>
            </div>
            {hasError && (
                <p className={styles.error} id={errorId}>
                    {error}
                </p>
            )}
        </div>
    );
};

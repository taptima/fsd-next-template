import { forwardRef, InputHTMLAttributes, useId } from 'react';
import { FieldWrapper, FieldWrapperProps } from 'shared/ui/inputs/common/FieldWrapper';

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'placeholder' | 'className'> &
    Pick<FieldWrapperProps, 'error'> & {
        label: string;
        className?: string;
    };

export const Input = forwardRef<HTMLInputElement, InputProps>((props, forwardedRef) => {
    const { id, label, disabled, className, error, ...restProps } = props;
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const hasError = !!error;

    return (
        <FieldWrapper inputId={inputId} label={label} error={error}>
            <input
                id={inputId}
                ref={forwardedRef}
                aria-errormessage={hasError ? inputId : undefined}
                aria-invalid={hasError}
                placeholder={label}
                disabled={disabled}
                {...restProps}
            />
        </FieldWrapper>
    );
});

Input.displayName = 'Input';

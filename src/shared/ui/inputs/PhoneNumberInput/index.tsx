import { forwardRef, FC } from 'react';
import { IMaskMixin } from 'react-imask';
import { Input, InputProps } from 'shared/ui/inputs/Input';

export type PhoneNumberInputProps = Omit<InputProps, 'onChange'> & {
    onChange?: (value: string) => void;
};

const MASK = [
    { mask: '+0 (000) 000-00-00', startsWith: '7', lazy: true },
    { mask: '0 (000) 000-00-00', startsWith: '8', lazy: true },
    { mask: '(000) 000-00-00', startsWith: '', lazy: true },
];

const InputWithMask = IMaskMixin(({ inputRef, ...mixinProps }) => (
    // @ts-expect-error: ref element typing
    <Input ref={inputRef} {...mixinProps} />
));

export const PhoneNumberInput: FC<PhoneNumberInputProps> = forwardRef<
    HTMLInputElement,
    PhoneNumberInputProps
>((props, ref) => {
    const { onChange, ...restProps } = props;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleDispatch = (appended: string, dynamicMasked: any) => {
        const current = (dynamicMasked.value ?? '') + appended;
        const number = current.replace(/\D/g, '');

        if (number.startsWith('8')) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return dynamicMasked.compiledMasks.find((mask: any) => mask.startsWith === '8');
        }
        if (number.startsWith('7')) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return dynamicMasked.compiledMasks.find((mask: any) => mask.startsWith === '7');
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return dynamicMasked.compiledMasks.find((mask: any) => mask.startsWith === '7');
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleAccept = (value: string, acceptRef: any) => {
        const raw = acceptRef.unmaskedValue;

        if (!raw) {
            return;
        }

        onChange?.(value);

        if (raw.startsWith('8')) {
            // eslint-disable-next-line no-param-reassign
            acceptRef.unmaskedValue = `7${raw.slice(1, raw.length)}`;

            return;
        }

        if (!raw.startsWith('7')) {
            // eslint-disable-next-line no-param-reassign
            acceptRef.unmaskedValue = `7${raw}`;
        }
    };

    return (
        <InputWithMask
            inputRef={ref}
            type="tel"
            inputMode="tel"
            placeholder="+7 (999) 999-99-99"
            autoComplete="tel"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            mask={MASK}
            dispatch={handleDispatch}
            onAccept={handleAccept}
            onChange={onChange}
            {...restProps}
        />
    );
});

PhoneNumberInput.displayName = 'PhoneNumberInput';

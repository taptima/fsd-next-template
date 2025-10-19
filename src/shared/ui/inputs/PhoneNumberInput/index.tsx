import type { InputRef } from 'antd';
import { forwardRef, ForwardedRef, useRef, ChangeEvent } from 'react';
import { IMaskMixin } from 'react-imask';
import useFormInstance from 'antd/es/form/hooks/useFormInstance';
import { Input, InputProps } from 'shared/ui/inputs/Input';

export type PhoneNumberInputProps<Form> = Omit<InputProps<Form>, 'onChange'> & {
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

type RefInputProps<Form> = PhoneNumberInputProps<Form> & { ref?: ForwardedRef<InputRef> };

const MASK = [
    { mask: '+0 (000) 000-00-00', startsWith: '7', lazy: true },
    { mask: '0 (000) 000-00-00', startsWith: '8', lazy: true },
    { mask: '(000) 000-00-00', startsWith: '', lazy: true },
];

const makeSyntheticChange = (value: string) => {
    return {
        target: { value },
        currentTarget: { value },
    } as unknown as ChangeEvent<HTMLInputElement>;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const assignInputRef = (ref: any, element: any) => {
    if (!ref) {
        return;
    }

    if (typeof ref === 'function') {
        ref(element);
    } else {
        try {
            // eslint-disable-next-line no-param-reassign
            ref.current = element;
        } catch {}
    }
};

const InputWithMask = IMaskMixin(({ inputRef, forwardedRef, ...mixinProps }) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleRef = (instance: any) => {
        if (!instance) {
            assignInputRef(inputRef, null);
            assignInputRef(forwardedRef, null);

            return;
        }

        const maybeNative =
            instance.input ??
            instance.input?.current ??
            instance.inputRef?.current ??
            (typeof instance.getInput === 'function' ? instance.getInput() : undefined) ??
            instance;
        const native = maybeNative?.current ? maybeNative.current : maybeNative;

        assignInputRef(inputRef, native instanceof HTMLInputElement ? native : null);
        assignInputRef(forwardedRef, instance);
    };

    // @ts-expect-error: `size` typing
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return <Input {...mixinProps} ref={handleRef as ForwardedRef<any>} />;
});

function InnerPhoneNumberInput<Form>(
    props: PhoneNumberInputProps<Form>,
    ref: ForwardedRef<InputRef>,
) {
    const { onChange, formItemProps, value, ...restProps } = props;
    const { name } = formItemProps ?? {};
    const form = useFormInstance();
    const nativeInputRef = useRef<HTMLInputElement>(null);

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
    const handleAccept = async (acceptedValue: string, acceptRef: any) => {
        onChange?.(makeSyntheticChange(acceptedValue));
        form.setFieldValue(name, acceptedValue);

        const raw = acceptRef.unmaskedValue;

        try {
            await form.validateFields([name]);
        } catch (error) {}

        if (!raw) {
            return;
        }

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
            inputRef={nativeInputRef}
            forwardedRef={ref}
            value={value}
            onChange={onChange}
            type="tel"
            inputMode="tel"
            placeholder="+7 (999) 999-99-99"
            autoComplete="tel"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            formItemProps={formItemProps}
            mask={MASK}
            dispatch={handleDispatch}
            onAccept={handleAccept}
            {...restProps}
        />
    );
}

export const PhoneNumberInput = forwardRef(InnerPhoneNumberInput) as <Form>(
    props: RefInputProps<Form>,
) => ReturnType<typeof InnerPhoneNumberInput>;

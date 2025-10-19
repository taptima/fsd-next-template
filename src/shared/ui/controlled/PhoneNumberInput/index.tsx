import type { FieldValues } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import type { ControlledProps } from 'shared/types/form';
import {
    PhoneNumberInput as BasePhoneNumberInput,
    PhoneNumberInputProps as BasePhoneNumberInputProps,
} from 'shared/ui/inputs/PhoneNumberInput';

export type PhoneNumberInputProps<Form extends FieldValues> = ControlledProps<Form> &
    BasePhoneNumberInputProps;

export const PhoneNumberInput = <Form extends FieldValues>(props: PhoneNumberInputProps<Form>) => {
    const { name, control, ...restProps } = props;

    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => <BasePhoneNumberInput {...field} {...restProps} />}
        />
    );
};

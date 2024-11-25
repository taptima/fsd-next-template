import { MaskedInput, MaskedInputProps } from 'shared/ui/inputs/MaskedInput';

export type PhoneNumberInputProps<Form> = Omit<MaskedInputProps<Form>, 'mask'>;

export function PhoneNumberInput<Form>(props: PhoneNumberInputProps<Form>) {
    return <MaskedInput type="tel" mask="+7 (000) 000-00-00" allowClear {...props} />;
}

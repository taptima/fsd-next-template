import { InputNumber, InputNumberProps } from 'shared/ui/inputs/InputNumber';
import { PHONE_NUMBER_FORMATTERS } from 'features/inputs/model/const/phoneNumberFormatters';

type Props<Form> = InputNumberProps<Form>;

export function PhoneNumberInput<Form>(props: Props<Form>) {
    return <InputNumber maxLength={18} {...PHONE_NUMBER_FORMATTERS} {...props} />;
}

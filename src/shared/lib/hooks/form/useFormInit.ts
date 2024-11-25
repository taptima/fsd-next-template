import type { FormInstance } from 'antd/es/form';
import { useEffect, useState } from 'react';
import { isDeepEqual } from 'shared/lib/helpers/isDeepEqual';

type Parameters<Form> = {
    form?: FormInstance<Form>;
    open?: boolean;
    initialValues?: Form;
};

export function useFormInit<Form>(parameters: Parameters<Form>) {
    const { form, open, initialValues } = parameters;
    const [isDirty, setIsDirty] = useState(false);

    const onFieldsChange = () => {
        const values = form?.getFieldsValue() as object;

        if (!initialValues || Object.keys(values).length === 0) {
            return;
        }

        setIsDirty(!isDeepEqual(initialValues, values));
    };

    useEffect(() => {
        onFieldsChange();
        form?.resetFields();
        setIsDirty(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open, form]);

    return {
        isDirty,
        onFieldsChange,
    };
}

import { useMemo, FC } from 'react';
import { useForm } from 'antd/es/form/Form';
import useMessage from 'antd/es/message/useMessage';
import type { DynamicModalProps } from 'shared/types/modal';
import type { EmployeeForm as EmployeeFormEntity } from 'pages/admin/EmployeesPage/model/types/form';
import { getFullName } from 'shared/lib/helpers/getFullName';
import { handleApiErrors } from 'shared/lib/helpers/handleApiErrors';
import { useFormInit } from 'shared/lib/hooks/form/useFormInit';
import { Accent } from 'shared/ui/display/Accent';
import { Screen } from 'shared/ui/feedback/Screen';
import { Button } from 'shared/ui/inputs/Button';
import { useAddEmployeeMutation } from 'pages/admin/EmployeesPage/api/swr/useAddEmployeeMutation';
import { mapEmployeeFormToQuery } from 'pages/admin/EmployeesPage/model/mapper/mapEmployeeFormToQuery';
import { mapEmployeeToForm } from 'pages/admin/EmployeesPage/model/mapper/mapEmployeeToForm';
import { EmployeeForm } from 'pages/admin/EmployeesPage/ui/Modals/common/EmployeeForm';

type Props = DynamicModalProps;

const FORM_ID = 'add-employee-form';

export const AddEmployeeModal: FC<Props> = (props) => {
    const { open, onCancel } = props;
    const initialValues = useMemo(() => mapEmployeeToForm(null), []);
    const { isMutating, trigger } = useAddEmployeeMutation();
    const [messageApi, contextHolder] = useMessage();
    const [form] = useForm<EmployeeFormEntity>();

    useFormInit({ form, open, initialValues });

    const handleFinish = async (values: EmployeeFormEntity) => {
        const response = await trigger(mapEmployeeFormToQuery(values));

        handleApiErrors({
            response,
            onSuccess: () => {
                onCancel();
                messageApi.open({
                    type: 'success',
                    content: (
                        <>
                            Пользователь <Accent>{getFullName(values)}</Accent> успешно создан
                        </>
                    ),
                });
            },
        });
    };

    return (
        <>
            {contextHolder}
            <Screen
                open={open}
                onCancel={onCancel}
                title="Создание пользователя"
                content={
                    <EmployeeForm
                        variant="add"
                        formProps={{
                            id: FORM_ID,
                            form,
                            initialValues,
                            onFinish: handleFinish,
                        }}
                        isMutating={isMutating}
                    />
                }
                bottomActions={
                    <>
                        <Button type="secondary" disabled={isMutating} onClick={onCancel}>
                            Отменить
                        </Button>
                        <Button
                            htmlType="submit"
                            form={FORM_ID}
                            type="primary"
                            loading={isMutating}
                        >
                            Создать
                        </Button>
                    </>
                }
            />
        </>
    );
};

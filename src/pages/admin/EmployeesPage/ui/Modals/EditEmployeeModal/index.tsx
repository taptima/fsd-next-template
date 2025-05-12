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
import { useEditEmployeeMutation } from 'pages/admin/EmployeesPage/api/swr/useEditEmployeeMutation';
import { useEmployee } from 'pages/admin/EmployeesPage/api/swr/useEmployee';
import { mapEmployeeFormToQuery } from 'pages/admin/EmployeesPage/model/mapper/mapEmployeeFormToQuery';
import { mapEmployeeToForm } from 'pages/admin/EmployeesPage/model/mapper/mapEmployeeToForm';
import { useEmployeesActionsStore } from 'pages/admin/EmployeesPage/model/store/useEmployeesActionsStore';
import { EmployeeForm } from 'pages/admin/EmployeesPage/ui/Modals/common/EmployeeForm';

type Props = DynamicModalProps;

const FORM_ID = 'edit-employee-form';

export const EditEmployeeModal: FC<Props> = (props) => {
    const { open, onCancel } = props;
    const employeeForEdit = useEmployeesActionsStore.use.employeeForEdit();
    const { id } = employeeForEdit ?? {};
    const { data, isLoading } = useEmployee(id);
    const initialValues = useMemo(() => mapEmployeeToForm(data), [data]);
    const { isMutating, trigger } = useEditEmployeeMutation();
    const [messageApi, contextHolder] = useMessage();
    const [form] = useForm<EmployeeFormEntity>();

    const { isDirty, onFieldsChange } = useFormInit({ form, open, initialValues });

    const handleFinish = async (values: EmployeeFormEntity) => {
        if (!id) {
            return;
        }

        const response = await trigger({
            id,
            ...mapEmployeeFormToQuery(values),
        });

        handleApiErrors({
            response,
            onSuccess: () => {
                onCancel();
                messageApi.open({
                    type: 'info',
                    content: (
                        <>
                            Пользователь <Accent>{getFullName(data)}</Accent> изменён
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
                title="Редактирование пользователя"
                isLoading={isLoading}
                content={
                    <EmployeeForm
                        variant="edit"
                        formProps={{
                            id: FORM_ID,
                            form,
                            initialValues,
                            onFieldsChange,
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
                            disabled={!isDirty}
                            loading={isMutating}
                        >
                            Сохранить
                        </Button>
                    </>
                }
            />
        </>
    );
};

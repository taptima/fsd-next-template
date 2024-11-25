import type { FC } from 'react';
import { useForm } from 'antd/es/form/Form';
import useMessage from 'antd/es/message/useMessage';
import type { DynamicDrawerProps } from 'shared/types/modal';
import type { EmployeeForm } from 'pages/admin/EmployeesPage/model/types/form';
import { handleApiErrors } from 'shared/lib/helpers/handleApiErrors';
import { useFormInit } from 'shared/lib/hooks/form/useFormInit';
import { Button } from 'shared/ui/inputs/Button';
import { useAddEmployeeMutation } from 'pages/admin/EmployeesPage/model/api/swr/useAddEmployeeMutation';
import { mapEmployeeToForm } from 'pages/admin/EmployeesPage/model/mapper/mapEmployeeToForm';
import { useEmployeesActionsStore } from 'pages/admin/EmployeesPage/model/store/useEmployeesActionsStore';
import { useEmployeesPageModalStore } from 'pages/admin/EmployeesPage/model/store/useEmployeesPageModalsStore';
import { EmployeeModal } from 'pages/admin/EmployeesPage/ui/Modals/common/EmployeeModal';

type Props = DynamicDrawerProps;

export const EditEmployeeModal: FC<Props> = (props) => {
    const { open, onClose } = props;
    const employeeForEdit = useEmployeesActionsStore.use.employeeForEdit();
    const initialValues = mapEmployeeToForm(employeeForEdit);
    const { isMutating, trigger } = useAddEmployeeMutation();
    const [messageApi, contextHolder] = useMessage();
    const [form] = useForm<EmployeeForm>();

    const { isDirty, onFieldsChange } = useFormInit({ form, open, initialValues });

    const { setEmployeeForChangingPassword } = useEmployeesActionsStore.use.actions();
    const { setIsEditEmployeeModalOpen, setIsChangePasswordEmployeeModalOpen } =
        useEmployeesPageModalStore.use.actions();

    const handleFinish = async (values: EmployeeForm) => {
        const response = await trigger(values);

        handleApiErrors({
            response,
            onSuccess: () => {
                onClose();
                messageApi.open({
                    type: 'success',
                    content: 'Изменения сохранены',
                });
            },
            onError: () => {
                messageApi.open({
                    type: 'error',
                    content: 'При редактировании произошла ошибка',
                });
            },
        });
    };

    const handleChangeButtonClick = () => {
        setEmployeeForChangingPassword(employeeForEdit);
        setIsEditEmployeeModalOpen(false);
        setIsChangePasswordEmployeeModalOpen(true);
    };

    return (
        <>
            {contextHolder}
            <EmployeeModal
                open={open}
                onClose={onClose}
                title="Редактирование сотрудника"
                formProps={{
                    form,
                    initialValues,
                    onFinish: handleFinish,
                    onFieldsChange,
                }}
                isMutating={isMutating}
                passwordRequired={false}
                changePassword={
                    <Button
                        type="secondary"
                        disabled={isMutating}
                        onClick={handleChangeButtonClick}
                    >
                        Сменить пароль
                    </Button>
                }
                actions={
                    <>
                        <Button
                            type="secondary"
                            padding="Large"
                            disabled={isMutating}
                            onClick={onClose}
                        >
                            Отмена
                        </Button>

                        <Button
                            htmlType="submit"
                            type="primary"
                            padding="Large"
                            loading={isMutating}
                            disabled={!isDirty}
                        >
                            Сохранить
                        </Button>
                    </>
                }
            />
        </>
    );
};

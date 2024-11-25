import type { FC } from 'react';
import { useForm } from 'antd/es/form/Form';
import useMessage from 'antd/es/message/useMessage';
import type { DynamicDrawerProps } from 'shared/types/modal';
import type { EmployeeWithPasswordForm } from 'pages/admin/EmployeesPage/model/types/form';
import { handleApiErrors } from 'shared/lib/helpers/handleApiErrors';
import { Button } from 'shared/ui/inputs/Button';
import { useAddEmployeeMutation } from 'pages/admin/EmployeesPage/model/api/swr/useAddEmployeeMutation';
import { mapEmployeeToForm } from 'pages/admin/EmployeesPage/model/mapper/mapEmployeeToForm';
import { EmployeeModal } from 'pages/admin/EmployeesPage/ui/Modals/common/EmployeeModal';

type Props = DynamicDrawerProps;

export const AddEmployeeModal: FC<Props> = (props) => {
    const { open, onClose } = props;
    const initialValues = mapEmployeeToForm(null);
    const { isMutating, trigger } = useAddEmployeeMutation();
    const [messageApi, contextHolder] = useMessage();
    const [form] = useForm<EmployeeWithPasswordForm>();

    const handleFinish = async (values: EmployeeWithPasswordForm) => {
        const response = await trigger(values);

        handleApiErrors({
            response,
            onSuccess: () => {
                onClose();
                messageApi.open({
                    type: 'success',
                    content: 'Сотрудник успешно добавлен',
                });
            },
            onError: () => {
                messageApi.open({
                    type: 'error',
                    content: 'При добавлении сотрудника произошла ошибка',
                });
            },
        });
    };

    return (
        <>
            {contextHolder}
            <EmployeeModal
                open={open}
                onClose={onClose}
                title="Добавление сотрудника"
                isRequired
                formProps={{
                    form,
                    initialValues,
                    onFinish: handleFinish,
                }}
                isMutating={isMutating}
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
                        >
                            Добавить
                        </Button>
                    </>
                }
            />
        </>
    );
};

import type { FC } from 'react';
import { useRouter } from 'next/navigation';
import type { DynamicModalProps } from 'shared/types/modal';
import { ADMIN_SIGN_IN } from 'shared/const/pageRoutes';
import { Button } from 'shared/ui/inputs/Button';
import { logoutCurrentUser } from 'entities/User/model/helper/logoutCurrentUser';
import { ActionModal } from 'widgets/ActionModal';

type Props = DynamicModalProps;

export const LogoutModal: FC<Props> = (props) => {
    const { onCancel, ...restProps } = props;
    const { push } = useRouter();

    const handleConfirmButtonClick = async () => {
        logoutCurrentUser();

        onCancel();
        push(ADMIN_SIGN_IN);
    };

    return (
        <ActionModal
            onCancel={onCancel}
            title="Выход из аккаунта"
            width={572}
            actions={
                <ActionModal.GridActions>
                    <Button type="secondary" onClick={onCancel}>
                        Отменить
                    </Button>
                    <Button type="primary" onClick={handleConfirmButtonClick}>
                        Выйти
                    </Button>
                </ActionModal.GridActions>
            }
            {...restProps}
        >
            <span>Вы действительно хотите выйти из системы?</span>
        </ActionModal>
    );
};

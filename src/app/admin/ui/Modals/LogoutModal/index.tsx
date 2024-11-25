import type { FC } from 'react';
import type { DynamicModalProps } from 'shared/types/modal';
import { Button } from 'shared/ui/inputs/Button';
import { ActionModal } from 'widgets/ActionModal';

type Props = DynamicModalProps;

export const LogoutModal: FC<Props> = (props) => {
    return (
        <ActionModal
            title="Выход из аккаунта"
            width={572}
            actions={
                <ActionModal.GridActions>
                    <Button type="primary">Выйти</Button>
                </ActionModal.GridActions>
            }
            {...props}
        >
            <span>Вы действительно хотите выйти из системы?</span>
        </ActionModal>
    );
};

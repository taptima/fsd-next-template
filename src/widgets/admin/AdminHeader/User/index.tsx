import { useState, FC } from 'react';
import { Avatar, Popover } from 'antd';
import { useAdminModalStore } from 'app/admin/model/store/useAdminModalStore';
import LogoutIcon from 'shared/assets/icons/logout.svg';
import { Button } from 'shared/ui/inputs/Button';
import { useUser } from 'entities/User/api/swr/useUser';
import styles from './styles.module.scss';

export const User: FC = () => {
    const { data } = useUser();
    const { username = '' } = data ?? {};
    const { setIsLogoutModalOpen } = useAdminModalStore.use.actions();
    const [popoverOpen, setPopoverOpen] = useState(false);

    const handleLogoutClick = () => {
        setPopoverOpen(false);
        setIsLogoutModalOpen(true);
    };

    return (
        <Popover
            open={popoverOpen}
            onOpenChange={setPopoverOpen}
            title={false}
            content={
                <Button
                    type="quaternary"
                    icon={<LogoutIcon width={16} />}
                    onClick={handleLogoutClick}
                >
                    Выйти
                </Button>
            }
            trigger="click"
            arrow={false}
            placement="bottomRight"
            overlayClassName={styles.popover}
        >
            <button type="button" className={styles.button}>
                <Avatar>{username.slice(0, 1)}</Avatar>
                <span className={styles.username}>{username}</span>
            </button>
        </Popover>
    );
};

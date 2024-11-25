import type { FC } from 'react';
import { Menu } from 'shared/ui/display/Menu';
import { ITEMS } from './content';

export const AdminMenu: FC = () => {
    return <Menu items={ITEMS} />;
};

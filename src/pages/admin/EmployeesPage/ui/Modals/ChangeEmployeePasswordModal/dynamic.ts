import { createLazyModal } from 'shared/lib/helpers/createLazyModal';
import type { ChangeEmployeePasswordModal as StaticChangeEmployeePasswordModal } from './index';

export const ChangeEmployeePasswordModal = createLazyModal(() =>
    import('./index').then((m) => m.ChangeEmployeePasswordModal),
) as typeof StaticChangeEmployeePasswordModal;

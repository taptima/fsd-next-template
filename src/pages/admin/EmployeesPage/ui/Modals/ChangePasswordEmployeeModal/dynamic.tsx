import { createLazyModal } from 'shared/lib/helpers/createLazyModal';
import type { ChangePasswordEmployeeModal as StaticChangePasswordEmployeeModal } from './index';

export const ChangePasswordEmployeeModal = createLazyModal(() =>
    import('./index').then((m) => m.ChangePasswordEmployeeModal),
) as typeof StaticChangePasswordEmployeeModal;

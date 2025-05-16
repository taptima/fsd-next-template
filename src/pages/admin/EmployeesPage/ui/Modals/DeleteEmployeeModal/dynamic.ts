import { createLazyModal } from 'shared/lib/helpers/createLazyModal';
import type { DeleteEmployeeModal as StaticDeleteEmployeeModal } from './index';

export const DeleteEmployeeModal = createLazyModal(() =>
    import('./index').then((m) => m.DeleteEmployeeModal),
) as typeof StaticDeleteEmployeeModal;

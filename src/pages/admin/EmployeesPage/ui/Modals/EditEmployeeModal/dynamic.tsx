import { createLazyModal } from 'shared/lib/helpers/createLazyModal';
import type { EditEmployeeModal as StaticAddEmployeeModal } from './index';

export const EditEmployeeModal = createLazyModal(() =>
    import('./index').then((m) => m.EditEmployeeModal),
) as typeof StaticAddEmployeeModal;

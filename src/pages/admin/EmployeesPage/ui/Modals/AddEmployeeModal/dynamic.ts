import { createLazyModal } from 'shared/lib/helpers/createLazyModal';
import type { AddEmployeeModal as StaticAddEmployeeModal } from './index';

export const AddEmployeeModal = createLazyModal(() =>
    import('./index').then((m) => m.AddEmployeeModal),
) as typeof StaticAddEmployeeModal;

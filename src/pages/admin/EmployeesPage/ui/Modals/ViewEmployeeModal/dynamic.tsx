import { createLazyModal } from 'shared/lib/helpers/createLazyModal';
import type { ViewEmployeeModal as StaticViewEmployeeModal } from './index';

export const ViewEmployeeModal = createLazyModal(() =>
    import('./index').then((m) => m.ViewEmployeeModal),
) as typeof StaticViewEmployeeModal;

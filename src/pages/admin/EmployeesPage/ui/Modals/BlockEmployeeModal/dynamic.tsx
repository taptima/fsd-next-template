import { createLazyModal } from 'shared/lib/helpers/createLazyModal';
import type { BlockEmployeeModal as StaticBlockEmployeeModal } from './index';

export const BlockEmployeeModal = createLazyModal(() =>
    import('./index').then((m) => m.BlockEmployeeModal),
) as typeof StaticBlockEmployeeModal;

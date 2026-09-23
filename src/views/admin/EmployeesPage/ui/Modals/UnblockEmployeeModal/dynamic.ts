import { createLazyModal } from 'shared/lib/helpers/createLazyModal';
import type { UnblockEmployeeModal as StaticUnblockEmployeeModal } from './index';

export const UnblockEmployeeModal = createLazyModal(() =>
    import('./index').then((m) => m.UnblockEmployeeModal),
) as typeof StaticUnblockEmployeeModal;

import { createLazyModal } from 'shared/lib/helpers/createLazyModal';
import type { LogoutModal as StaticLogoutModal } from './index';

export const LogoutModal = createLazyModal(() =>
    import('./index').then((m) => m.LogoutModal),
) as typeof StaticLogoutModal;

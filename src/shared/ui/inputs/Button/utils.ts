import type { LoaderProps } from 'shared/ui/display/Loader';
import type { ButtonVariant } from './index';

export const MAP_BUTTON_VARIANT_TO_LOADER_VARIANT: Record<ButtonVariant, LoaderProps['variant']> = {
    Primary: 'White',
    Secondary: 'Primary',
};

import type { LoaderProps } from 'shared/ui/display/Loader';

export type ButtonVariant = 'primary' | 'secondary';

export const MAP_BUTTON_VARIANT_TO_LOADER_VARIANT: Record<ButtonVariant, LoaderProps['variant']> = {
    primary: 'white',
    secondary: 'primary',
};

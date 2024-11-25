import type { IconProps } from 'shared/types/icon';
import type { ButtonProps } from 'shared/ui/inputs/Button';

export type ModalCloseButtonVariant = 'Text' | 'Border';

export const MAP_CLOSE_BUTTON_VARIANT_TO_PROPS: Record<
    ModalCloseButtonVariant,
    { closeButtonProps: ButtonProps; closeIconProps: IconProps }
> = {
    Text: {
        closeButtonProps: {
            type: 'text',
            padding: 'None',
        },
        closeIconProps: {
            width: 24,
        },
    },
    Border: {
        closeButtonProps: {
            type: 'default',
        },
        closeIconProps: {
            width: 16,
        },
    },
};

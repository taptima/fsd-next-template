import type { FC } from 'react';
import clsx from 'clsx';
import type { IconProps } from 'shared/types/icon';
import ChevronLeftIcon from 'shared/assets/icons/chevron-left.svg';
import { Button, ButtonProps } from 'shared/ui/inputs/Button';
import { ButtonLink } from 'shared/ui/navigation/ButtonLink';
import styles from './styles.module.scss';

type Props = ButtonProps & {
    iconProps?: IconProps;
};

export const BackButton: FC<Props> = (props) => {
    const { href, iconProps, className, ...restProps } = props;
    const Component = (href ? ButtonLink : Button) as FC<Props>;

    return (
        <Component
            type="tertiary"
            href={href}
            padding="IconLarge"
            className={clsx(styles.button, className)}
            {...restProps}
        >
            <ChevronLeftIcon width={16} {...iconProps} />
        </Component>
    );
};

import type { FC, PropsWithChildren } from 'react';
import NextLink from 'next/link';
import { Button, ButtonProps } from 'shared/ui/inputs/Button';

export type ButtonLinkProps = PropsWithChildren &
    ButtonProps & {
        href: string;
    };

export const ButtonLink: FC<ButtonLinkProps> = (props) => {
    const { children, href, ...restProps } = props;

    return (
        <NextLink legacyBehavior href={href} passHref>
            <Button {...restProps}>{children}</Button>
        </NextLink>
    );
};

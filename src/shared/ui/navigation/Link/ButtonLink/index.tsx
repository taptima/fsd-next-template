import type { FC, PropsWithChildren } from 'react';
import NextLink from 'next/link';
import { Button, ButtonProps } from 'shared/ui/inputs/Button';

type Props = PropsWithChildren &
    ButtonProps & {
        href: string;
    };

export const ButtonLink: FC<Props> = (props) => {
    const { children, href, ...restProps } = props;

    return (
        <NextLink legacyBehavior href={href} passHref>
            <Button as="a" {...restProps}>
                {children}
            </Button>
        </NextLink>
    );
};

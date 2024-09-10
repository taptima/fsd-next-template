import type { AnchorHTMLAttributes, FC, PropsWithChildren } from 'react';
import clsx from 'clsx';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import type { Classname } from 'shared/types/styles';
import styles from './styles.module.scss';

type LinkVariant = 'next' | 'external' | 'naked';

type NextVariantProps = NextLinkProps & {
    linkVariant?: Extract<LinkVariant, 'next'>;
};

type BaseVariantProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
    linkVariant: Extract<LinkVariant, 'external' | 'naked'>;
};

export type LinkProps = PropsWithChildren &
    Classname & {
        href: string;
        variant?: 'primary' | 'secondary';
        className?: string;
    } & (BaseVariantProps | NextVariantProps);

export const Link: FC<LinkProps> = (props) => {
    const { children, variant = 'primary', linkVariant = 'next', className, ...restProps } = props;
    const linkClassname = clsx(styles.link, styles[variant], className);

    if (linkVariant === 'naked') {
        return (
            <a className={linkClassname} {...restProps}>
                {children}
            </a>
        );
    }

    if (linkVariant === 'external') {
        return (
            <a className={linkClassname} rel="noopener noreferrer" target="_blank" {...restProps}>
                {children}
            </a>
        );
    }

    return (
        <NextLink className={linkClassname} {...restProps}>
            {children}
        </NextLink>
    );
};

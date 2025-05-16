import type { LinkProps } from 'shared/ui/navigation/Link';
import { prettifyPhone } from 'shared/lib/helpers/prettifyPhone';

export const getPhoneLinkProps = (phone: string): LinkProps => {
    return {
        children: prettifyPhone(phone),
        href: `tel:${phone}`,
    };
};

import type { FC } from 'react';
import Script from 'next/script';

type Props = {
    name: string;
    data: Record<string, unknown>;
};

export const JsonLd: FC<Props> = (props) => {
    const { name, data } = props;

    return (
        // eslint-disable-next-line @next/next/no-before-interactive-script-outside-document
        <Script
            id={`${name}-jsonld`}
            type="application/ld+json"
            strategy="beforeInteractive"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data, null, 2) }}
        />
    );
};

import type { FC } from 'react';
import Script from 'next/script';
import { ENABLE_METRICS, IS_PRODUCTION } from 'shared/const/env';
import { YANDEX_METRIKA, YANDEX_METRIKA_NO_SCRIPT } from 'features/seo/model/const/seo';

export const WebAnalytics: FC = () => {
    if (!IS_PRODUCTION || !ENABLE_METRICS) {
        return null;
    }

    return (
        <>
            <Script
                id="yandex-metrics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: YANDEX_METRIKA }}
            />
            <noscript>
                <div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={YANDEX_METRIKA_NO_SCRIPT}
                        style={{ position: 'absolute', left: '-9999px' }}
                        alt=""
                    />
                </div>
            </noscript>
        </>
    );
};

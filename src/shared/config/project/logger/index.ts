import { IS_PRODUCTION } from 'shared/const/env';

export const sendErrorToSentry = async (error: Error): Promise<void> => {
    const Sentry = await import('@sentry/nextjs');

    if (!process.env.NEXT_PUBLIC_SENTRY_DSN || !IS_PRODUCTION) return;

    try {
        Sentry.captureException(error);
        await Sentry.flush(2000);
    } catch {}
};

export const handleError = (title = '', error?: Error | null) => {
    if (!IS_PRODUCTION) {
        // eslint-disable-next-line no-console
        console.groupCollapsed(title);

        if (error) {
            // eslint-disable-next-line no-console
            console.error(error);
        }

        // eslint-disable-next-line no-console
        console.groupEnd();
    }

    if (IS_PRODUCTION && error) {
        sendErrorToSentry(error).then();
    }
};

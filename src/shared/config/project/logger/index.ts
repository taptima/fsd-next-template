export const sendErrorToSentry = async (error: Error): Promise<void> => {
    const Sentry = await import('@sentry/nextjs');

    if (!process.env.NEXT_PUBLIC_SENTRY_DSN || process.env.NODE_ENV !== 'production') return;

    try {
        Sentry.captureException(error);
        await Sentry.flush(2000);
    } catch {}
};

export const handleError = (title = '', error?: Error | null) => {
    if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.log(JSON.stringify({ title, error }, null, 2));
    }

    if (process.env.NODE_ENV === 'production') {
        if (error) {
            sendErrorToSentry(error).then();
        }
    }
};

import * as Sentry from '@sentry/nextjs';

const SENTRY_DSN = process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
    enabled: Boolean(SENTRY_DSN) && process.env.NODE_ENV === 'production',
    dsn: SENTRY_DSN,
    tracesSampleRate: 1.0,
    maxValueLength: 500,
});

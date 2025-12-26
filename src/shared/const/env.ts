export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? '';
export const ASSETS_VERSION = process.env.NEXT_PUBLIC_ASSETS_VERSION;
export const ENABLE_ANALYTICS = process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true';
export const IS_DEV = process.env.NODE_ENV === 'development';
export const IS_PRODUCTION = process.env.NODE_ENV === 'production';

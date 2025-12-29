export const HOME = '/';

// Example
export const EXAMPLE = '/example';
export const CATALOG = `${EXAMPLE}/catalog`;
export const ITEM = (path: number | string) => `${CATALOG}/${path}`;

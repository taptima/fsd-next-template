export const HOME = '/';

// Example
export const EXAMPLE = '/example';
export const CATALOG = `${EXAMPLE}/catalog`;
export const ITEM = (path: number | string) => `${CATALOG}/${path}`;

export const ADMIN = '/admin';
export const ADMIN_SECTION = (path: string) => `${ADMIN}/${path}`;
export const ADMIN_SIGN_IN = ADMIN_SECTION('sign-in');
export const ADMIN_EMPLOYEES = ADMIN_SECTION('employees');

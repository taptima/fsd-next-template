export const HOME = '/';

export const ADMIN = '/admin';
export const ADMIN_SECTION = (path: string) => `${ADMIN}/${path}`;
export const ADMIN_EMPLOYEES = ADMIN_SECTION('employees');

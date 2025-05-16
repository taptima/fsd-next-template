const AUTH = (path: string) => `auth/${path}`;
export const LOGIN = AUTH('login');
export const REFRESH = (token: string) => AUTH(`refresh-token/${token}`);
export const MEDIA_UPLOAD = '/media/upload';
export const MEDIA_UPLOADS = '/media/uploads';

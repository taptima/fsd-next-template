import { ASSETS_VERSION } from 'shared/const/env';

export function asset(path: string): string {
    return `/${path}?v=${ASSETS_VERSION}`;
}

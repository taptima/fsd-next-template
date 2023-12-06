import { CSSProperties } from 'react';

export function createCssVariable(name: string, value: string | number, unit = ''): CSSProperties {
    return {
        [`--${name}`]: `${value}${unit}`,
    };
}

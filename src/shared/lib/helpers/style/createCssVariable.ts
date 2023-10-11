import { CSSProperties } from 'react';

export default function createCssVariable(
    name: string,
    value: string | number,
    unit = '',
): CSSProperties {
    return {
        [`--${name}`]: `${value}${unit}`,
    };
}

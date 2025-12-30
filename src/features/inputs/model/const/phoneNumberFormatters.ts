import type { Formatters } from 'features/inputs/model/types/formatters';

const onlyDigits = (value: string) => {
    return value.replace(/\D+/g, '');
};

const normalize = (raw: string): string => {
    const digits = onlyDigits(raw);

    if (!digits) {
        return '';
    }

    let d = digits;

    if (d[0] === '8') {
        d = `7${d.slice(1)}`;
    }

    if (d[0] !== '7') {
        d = `7${d}`;
    }

    return d.slice(0, 11);
};

export const formatter = (value?: string | number): string => {
    const raw = value == null ? '' : String(value);
    const normalized = normalize(raw);

    if (!normalized) {
        return '';
    }

    const national = normalized.slice(1);
    const a = national.slice(0, 3);
    const b = national.slice(3, 6);
    const c = national.slice(6, 8);
    const d = national.slice(8, 10);

    let out = '+7';

    if (!national) return out;

    out += ` (${a}`;

    if (a.length < 3) return out;

    out += ')';

    if (b) out += ` ${b}`;
    if (c) out += `-${c}`;
    if (d) out += `-${d}`;

    return out;
};

export const parser = (displayValue = ''): string => {
    const digits = onlyDigits(displayValue);

    if (!digits) {
        return '';
    }

    return normalize(digits);
};

export const PHONE_NUMBER_FORMATTERS: Formatters = {
    formatter,
    parser,
};

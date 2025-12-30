import type { ValueType } from './valueType';

export type Formatters = {
    formatter?: (value: ValueType) => string;
    parser?: (value: string | undefined) => NonNullable<ValueType>;
};

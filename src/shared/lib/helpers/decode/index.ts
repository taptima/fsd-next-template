import { Struct, validate } from 'superstruct';
import { handleError } from 'shared/config/logger';

export const decode = <T, Fn extends AnyFunction<T>>(
    data: T,
    schema: Struct<T, object>,
    mapper: Fn,
    defaultData?: ReturnType<Fn>,
): ReturnType<Fn> | null => {
    const [err, decoded] = validate(data, schema);

    if (err) {
        /**
         * **Superstruct error example**
         * value: 10,
         * type: 'string',
         * refinement: undefined,
         * key: 'limit',
         * path: [ 'limit' ],
         * branch: [ { products: [Array], total: 100, skip: 10, limit: 10 }, 10 ],
         * failures: [Function (anonymous)]
         * */

        handleError('DecodingError', err);

        if (!defaultData) {
            throw err;
        }

        return defaultData;
    }

    return mapper(decoded);
};

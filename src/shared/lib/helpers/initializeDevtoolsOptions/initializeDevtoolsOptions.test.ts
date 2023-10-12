import { IS_PRODUCTION } from 'shared/const/env';
import { DevtoolsOptions } from 'zustand/middleware';
import initializeDevtoolsOptions from './index';

describe('initializeDevtoolsOptions', () => {
    const name = 'storeName';

    const defaultAnswer = {
        name,
        store: name,
        enabled: !IS_PRODUCTION,
    };

    test('with only first param', () => {
        expect(initializeDevtoolsOptions(name)).toEqual(defaultAnswer);
    });

    test('with options', () => {
        const options: DevtoolsOptions = {
            maxAge: 500,
            anonymousActionType: 'anonymous',
        };
        expect(initializeDevtoolsOptions(name, options)).toEqual({
            ...defaultAnswer,
            ...options,
        });
    });

    test('rewrite default options', () => {
        const options: DevtoolsOptions = {
            name: 'new Name',
            store: 'store Name',
            enabled: false,
            maxAge: 200,
        };

        expect(initializeDevtoolsOptions(name, options)).toEqual({
            ...defaultAnswer,
            ...options,
        });
    });
});

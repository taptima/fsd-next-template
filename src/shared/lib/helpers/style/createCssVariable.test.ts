import { createCssVariable } from './createCssVariable';

describe('createCssVariable', () => {
    test('variable without units', () => {
        const result = {
            '--test': 'test',
        };
        expect(createCssVariable('test', 'test')).toEqual(result);
    });

    test('numeric value', () => {
        const result = {
            '--test': '25',
        };
        expect(createCssVariable('test', 25)).toEqual(result);
    });

    test('variable with units', () => {
        const result = {
            '--padding': '24px',
        };
        expect(createCssVariable('padding', '24', 'px')).toEqual(result);
    });
});

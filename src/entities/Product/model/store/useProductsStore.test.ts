import { act, renderHook } from '@testing-library/react';
import type { ProductsState } from 'entities/Product/model/types/store';
import { useProductsStore } from './useProductsStore';

const initialState: ProductsState = {
    limit: 10,
    page: 1,
};

describe('useProductsStore', () => {
    it('check initial values', () => {
        const { result } = renderHook(() => useProductsStore());
        expect(result.current).toMatchObject(initialState);
    });

    it('check set limit action', () => {
        const { result } = renderHook(() => useProductsStore());
        expect(result.current.limit).toEqual(initialState.limit);

        act(() => result.current.actions.setLimit(20));
        expect(result.current.limit).toEqual(20);
        act(() => result.current.actions.setLimit(30));
        expect(result.current.limit).toEqual(30);
    });

    it('check set page action', () => {
        const { result } = renderHook(() => useProductsStore());
        expect(result.current.page).toEqual(initialState.page);

        act(() => result.current.actions.setPage(20));
        expect(result.current.page).toEqual(20);
        act(() => result.current.actions.setPage(30));
        expect(result.current.page).toEqual(30);
    });

    it('check reset action', () => {
        const { result } = renderHook(() => useProductsStore());
        expect(result.current).toMatchObject(initialState);
        act(() => result.current.actions.setLimit(20));
        act(() => result.current.actions.setPage(2));
        expect(result.current).toMatchObject({
            limit: 20,
            page: 2,
        });
        act(() => result.current.actions.reset());
        expect(result.current).toMatchObject(initialState);
    });
});

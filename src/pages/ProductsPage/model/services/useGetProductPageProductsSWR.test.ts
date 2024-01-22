import { renderHook, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { mockProducts } from 'shared/mock/products';
import { server } from 'shared/lib/helpers/test/mockServer';
import { useGetProductPageProductsSWR } from './useGetProductPageProductsSWR';

describe('useGetProductPageProductsSWR', () => {
    it('should handle error', async () => {
        server.use(
            rest.get('/api/products', (req, res, ctx) => {
                return res.once(ctx.status(500));
            }),
        );
        const { result } = renderHook(() => useGetProductPageProductsSWR());
        await waitFor(() => {
            expect(result.current.error.message).toBe('Request failed with status code 500');
        });
    });

    it('should return data', async () => {
        const { result } = renderHook(() => useGetProductPageProductsSWR());
        await waitFor(() => {
            expect(result.current.data).toEqual({ products: mockProducts });
        });
    });
});

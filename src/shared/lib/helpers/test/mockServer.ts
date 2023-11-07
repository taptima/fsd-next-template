import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { mockProducts } from 'shared/mock/products';

export const handlers = [
    rest.get('/api/products', (req, res, ctx) => {
        return res(
            ctx.json({
                products: mockProducts,
            }),
        );
    }),
];

export const server = setupServer(...handlers);

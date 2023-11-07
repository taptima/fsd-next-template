import { render, screen, waitFor } from '@testing-library/react';
import ProductsPage from './index';

describe('ProductsPage', () => {
    test('test render', async () => {
        render(<ProductsPage />);
        await waitFor(() => {
            expect(screen.getByTestId('products')).toBeInTheDocument();
            expect(screen.getByText(/description/gi)).toBeInTheDocument();
        });
    });
});

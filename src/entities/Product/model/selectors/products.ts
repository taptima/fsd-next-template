import { useProductsStore } from '../store/useProductsStore';

export const useProductsLimit = () => useProductsStore((state) => state.limit);
export const useProductsPage = () => useProductsStore((state) => state.page);
export const useProductsActions = () => useProductsStore((state) => state.actions);

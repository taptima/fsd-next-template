import { create } from 'zustand';
import { withGeneratedSelectors } from './index';

describe('withGeneratedSelectors', () => {
    test('test default store', () => {
        const useBearStore = create<{
            bears: number;
            increasePopulation: () => void;
            removeAllBears: () => void;
        }>((set) => ({
            bears: 0,
            increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
            removeAllBears: () => set({ bears: 0 }),
        }));

        expect(withGeneratedSelectors(useBearStore)).toHaveProperty('use');
    });
});

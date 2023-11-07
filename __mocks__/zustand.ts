import { act } from '@testing-library/react';
import * as zustand from 'zustand';

const { create: actualCreate, createStore: actualCreateStore } =
    jest.requireActual<typeof zustand>('zustand');

export const storeResetFns = new Set<() => void>();

type Variant = 'create' | 'createStore';

const createTestStore = <T>(stateCreator: zustand.StateCreator<T>, variant: Variant) => {
    const store =
        variant === 'create' ? actualCreate(stateCreator) : actualCreateStore(stateCreator);
    const initialState = store.getState();
    storeResetFns.add(() => {
        store.setState(initialState, true);
    });

    return store;
};

export const create = (<T>() => {
    console.log('zustand create mock');

    return (stateCreator: zustand.StateCreator<T>) => {
        return createTestStore(stateCreator, 'create');
    };
}) as typeof zustand.create;

export const createStore = (<T>(stateCreator: zustand.StateCreator<T>) => {
    console.log('zustand createStore mock');

    return createTestStore(stateCreator, 'createStore');
}) as typeof zustand.createStore;

afterEach(() => {
    act(() => {
        storeResetFns.forEach((resetFn) => {
            resetFn();
        });
    });
});

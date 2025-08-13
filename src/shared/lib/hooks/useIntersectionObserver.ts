import { RefObject, useEffect, useRef, useState } from 'react';

type Return<T> = [RefObject<T | null>, boolean];

/**
 * @warning Do not use with multiple return statements
 * */
export function useIntersectionObserver<T extends HTMLElement>(
    options?: IntersectionObserverInit,
    defaultState?: boolean,
): Return<T> {
    const intersectionObserver = useRef<IntersectionObserver>(null);
    const observerRef = useRef<T>(null);
    const [isIntersecting, setIsIntersecting] = useState(defaultState ?? false);

    useEffect(() => {
        intersectionObserver.current = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
        }, options);

        if (observerRef.current) {
            intersectionObserver.current.observe(observerRef.current);
        }

        return () => {
            intersectionObserver.current?.disconnect();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [observerRef, options?.root]);

    return [observerRef, isIntersecting];
}

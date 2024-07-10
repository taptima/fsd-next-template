import { useEffect, useState } from 'react';
import useWindowResize from './useWindowResize';

export default function useScrollbarWidth() {
    const [scrollbarWidth, setScrollbarWidth] = useState(0);

    useWindowResize(() => {
        const outer = document.createElement('div');
        const inner = document.createElement('div');
        outer.style.visibility = 'hidden';
        outer.style.overflow = 'scroll';
        document.body.appendChild(outer);
        outer.appendChild(inner);

        const currentScrollbarWidth = outer.offsetWidth - inner.offsetWidth;

        outer.parentNode?.removeChild(outer);
        setScrollbarWidth(currentScrollbarWidth);
    }, []);

    useEffect(() => {
        document.body.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);
    }, [scrollbarWidth]);
}

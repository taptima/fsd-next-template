'use client';

import dynamic from 'next/dynamic';

export const Tooltip = dynamic(() => import('./index').then((module) => module.Tooltip), {
    ssr: true,
});

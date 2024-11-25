import type { SyntheticListenerMap } from '@dnd-kit/core/dist/hooks/utilities';
import { CSSProperties, FC, HTMLAttributes, createContext, useContext, useMemo } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

type Props = HTMLAttributes<HTMLTableRowElement> & {
    'data-row-key': string;
};

type SortableRowContextProps = {
    setActivatorNodeRef?: (element: HTMLElement | null) => void;
    listeners?: SyntheticListenerMap;
    isDisabled?: boolean;
};

const SortableRowContext = createContext<SortableRowContextProps>({});

export const SortableRow: FC<Props> = (props) => {
    const { 'data-row-key': rowKey } = props;
    const {
        transform,
        transition,
        isDragging,
        listeners,
        attributes,
        setActivatorNodeRef,
        setNodeRef,
    } = useSortable({
        id: rowKey,
    });
    const contextValue = useMemo<SortableRowContextProps>(
        () => ({ setActivatorNodeRef, listeners }),
        [setActivatorNodeRef, listeners],
    );

    const style: CSSProperties = {
        transform: CSS.Translate.toString(transform),
        transition,
        ...(isDragging ? { position: 'relative', zIndex: 9999 } : {}),
    };

    return (
        <SortableRowContext.Provider value={contextValue}>
            <tr {...props} ref={setNodeRef} style={style} {...attributes} />
        </SortableRowContext.Provider>
    );
};

export function useSortableRowContext(): SortableRowContextProps {
    const context = useContext(SortableRowContext);

    if (!context) {
        throw new Error('useSortableRowContext hook must be used within SortableRow');
    }

    return context;
}

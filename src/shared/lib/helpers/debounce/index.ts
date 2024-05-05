// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const debounce = <F extends (...args: any) => any>(mainFunction: F, delay: number) => {
    let timer: NodeJS.Timeout;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const fn = (...args: any[]) => {
        clearTimeout(timer);

        timer = setTimeout(() => {
            mainFunction(...args);
        }, delay);
    };

    return fn as unknown as (...args: Parameters<F>) => ReturnType<F>;
};

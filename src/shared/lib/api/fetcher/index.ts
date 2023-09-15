export const fetcher = (...args: [RequestInfo | URL, RequestInit | undefined]) =>
    fetch(...args).then((res) => res.json());

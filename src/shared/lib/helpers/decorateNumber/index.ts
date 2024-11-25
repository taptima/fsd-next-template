export function decorateNumber(number: number): string {
    return String(number ?? 0).replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
}

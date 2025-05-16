/**
 *
 * @param phone sanitized phone number (i.e. `+79999999999`)
 * @returns `+7 (999) 999-99-99`
 */
export function prettifyPhone(phone: string): string {
    try {
        return phone.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 ($2) $3-$4-$5');
    } catch (e) {
        return phone;
    }
}

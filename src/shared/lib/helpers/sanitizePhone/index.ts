export function sanitizePhone(phone: string): string {
    try {
        return phone.replace(/[\s\-()]+/g, '');
    } catch (e) {
        return '';
    }
}

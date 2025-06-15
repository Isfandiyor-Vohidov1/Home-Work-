export function removeChar(str: string): string {
    return str.length >= 2 ? str.slice(1, -1) : str;
}
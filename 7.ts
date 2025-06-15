export function positiveSum(arr: number[]): number {
    return arr.reduce((sum, num) => num > 0 ? sum + num : sum, 0);
}
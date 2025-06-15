export function max(numbers: number[]): number {
    if (numbers.length === 0) throw new Error("Empty list provided");
    let maxNum = numbers[0];
    for (const num of numbers) {
        if (num > maxNum) {
            maxNum = num;
        }
    }
    return maxNum;
}

export function min(numbers: number[]): number {
    if (numbers.length === 0) throw new Error("Empty list provided");
    let minNum = numbers[0];
    for (const num of numbers) {
        if (num < minNum) {
            minNum = num;
        }
    }
    return minNum;
}
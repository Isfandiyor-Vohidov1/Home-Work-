export function countSheep(num: number): string {
    let murmur = '';
    for (let i = 1; i <= num; i++) {
        murmur += `${i} sheep...`;
    }
    return murmur;
}
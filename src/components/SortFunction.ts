export function SortFunction(wordOne: string, wordTwo: string) {
    const words = wordOne + wordTwo;
    const charArray = words.split("");
    const sorted = charArray.sort();
    const result = sorted.toString();
    return result;
}
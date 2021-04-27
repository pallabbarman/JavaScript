/* eslint-disable no-shadow */
const numbers = [1, 3, 5, 7, 9, 11, 23, 45, 67, 89, 424];

function binarySearch(numbers, target) {
    let start = 0;
    let end = numbers.length - 1;
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        if (numbers[mid] === target) {
            console.log('Item found in position', mid);
            return mid;
        }
        if (numbers[mid] < target) {
            start = mid + 1;
        }
        if (numbers[mid] > target) {
            end = mid - 1;
        }
    }
    return -1;
}

const target = 899;
const index = binarySearch(numbers, target);
console.log(index);

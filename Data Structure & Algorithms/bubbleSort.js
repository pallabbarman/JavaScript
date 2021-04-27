/* eslint-disable no-param-reassign */
const numbers = [23, 54, 12, 8, 45, 90, 2];

function bubbleSort(array) {
    for (let i = 0; i < array.length; i += 1) {
        for (let j = 0; j < array.length; j += 1) {
            if (array[j] > array[j + 1]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

function bubbleSortDesc(array) {
    for (let i = 0; i < array.length; i += 1) {
        for (let j = 0; j < array.length; j += 1) {
            if (array[j] < array[j + 1]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

const sorted = bubbleSort(numbers);
console.log(sorted);

const desSorted = bubbleSortDesc(numbers);
console.log(desSorted);

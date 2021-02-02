const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const part = numbers.slice(2, 5);  //slice didn't delete value from main array
console.log(part);
console.log(numbers);

const removed = numbers.splice(2, 5);  //splice delete value from main array
console.log(removed);
console.log(numbers);

const together = numbers.join(" ");
console.log(together);
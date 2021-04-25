const linearSearch = (list, target) => {
    for (let i = 0; i < list.length; i += 1) {
        if (list[i] === target) return i;
    }
    return null;
};

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result = linearSearch(list, 8);

console.log(result);

result = linearSearch(list, 9);

console.log(result);

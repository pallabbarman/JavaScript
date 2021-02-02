let bonus = 20;

function sum(first, second) {
    let result = first + second + bonus;
    if (result > 9) {
        const mood = 'happy';
        console.log(mood);
    }
    return result;
}
console.log(sum(3, 7));
const numbers = [1, -2, 3, 4, -5, 6, 7, 8, -9];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element > 5) {
        break;
    }
    //console.log(element);
}
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element < 0) {
        continue;
    }
    //console.log(element);
}

function doSomething(x, y = 4){

    console.log(y);
    
    }
    
    doSomething(3,2);
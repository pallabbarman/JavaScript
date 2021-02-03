function num() {
    console.log("digit");
    console.log("hello");
}
num();

function double(number) {
    var result = number * 2;
    console.log(result);
}
double(10);

function triple(number) {
    var result = number * 3;
    return result;
}
var first = triple(10);
console.log(first);
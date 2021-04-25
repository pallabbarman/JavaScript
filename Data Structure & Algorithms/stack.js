// Last In First Out = LIFO

class Stack {
    constructor() {
        this.stack = [];
    }

    add(item) {
        this.stack.push(item);
    }

    remove() {
        if (this.stack.length) {
            return this.stack.pop();
        }

        return console.log('Error');
    }
}

const guest = new Stack();
guest.add('Tom');
guest.add('Hanks');
guest.add('Jerry');
guest.add('Cruise');

console.log(guest.stack);

const speaker = guest.remove();

console.log(speaker);
console.log(guest.stack);

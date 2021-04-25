// First In First Out = FIFO

class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(item) {
        this.queue.push(item);
    }

    dequeue() {
        if (this.queue.length) {
            return this.queue.shift();
        }

        return console.log('Error');
    }
}

const foods = new Queue();
foods.enqueue('Biriyani');
foods.enqueue('Burger');
foods.enqueue('Roast');
foods.enqueue('Pizza');

console.log(foods.queue);

const eating = foods.dequeue();

console.log(eating);
console.log(foods.queue);

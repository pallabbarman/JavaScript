class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class LinkedList {
    constructor(head) {
        this.head = head;
    }

    add(value) {
        const newNode = new Node(value);
        let current = this.head;
        while (current.next != null) {
            current = current.next;
        }
        current.next = newNode;
    }

    remove(value) {
        let current = this.head;
        let previous = null;
        while (current !== null) {
            if (current.value === value) {
                previous.next = current.next;
                break;
            }
            previous = current;
            current = current.next;
        }
    }
}

const head = new Node(150);
const connection = new LinkedList(head);
connection.add(27);
connection.add(54);
connection.add(67);
connection.add(159);

console.log(JSON.stringify(connection));

connection.remove(54);
console.log(JSON.stringify(connection));

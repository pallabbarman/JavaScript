class Dictionary {
    constructor() {
        this.dictionary = {};
    }

    add(key, value) {
        this.dictionary[key] = value;
    }

    get(key) {
        return this.dictionary[key];
    }
}

const phoneBook = new Dictionary();
phoneBook.add('Tom', '01788996633');
phoneBook.add('Hanks', '01788994569');
phoneBook.add('Julia', '01788997531');
phoneBook.add('Sharon', '01788996159');

console.log(phoneBook.dictionary);

const tom = phoneBook.get('Tom');
console.log(tom);

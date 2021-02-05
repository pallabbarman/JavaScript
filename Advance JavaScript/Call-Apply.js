const normalPerson = {
    firstName: 'Tom',
    lastName: 'Hanks',
    salary: 15000,
    getFullName: function () {
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function (amount, tips, tax) {
        console.log(this);
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }
}
const heroPerson = {
    firstName: 'Hero',
    lastName: 'Alo',
    salary: 25000,
}
// call 
normalPerson.chargeBill.call(heroPerson, 900, 100, 50);
normalPerson.chargeBill.call(heroPerson, 3000, 300, 30);
console.log(heroPerson.salary);

// apply 
normalPerson.chargeBill.apply(heroPerson, [3000, 300, 30]);
console.log(heroPerson.salary);
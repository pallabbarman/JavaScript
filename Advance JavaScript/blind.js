const normalPerson = {
    firstName: 'Tom',
    lastName: 'Hanks',
    salary: 15000,
    getFullName: function () {
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function (amount) {
        console.log(this);
        this.salary = this.salary - amount;
        return this.salary;
    }
}
const heroPerson = {
    firstName: 'Hero',
    lastName: 'Alo',
    salary: 25000,
}
const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
heroChargeBill(1000);
console.log(heroPerson.salary);
console.log(normalPerson.salary);
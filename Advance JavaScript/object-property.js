const students = [
    { id: 21, name: 'Tom Hanks' },
    { id: 31, name: 'Dipjol' },
    { id: 41, name: 'Shakib Khan' },
    { id: 51, name: 'Ananta jalil' }
]
const names = students.map(s => s.name);
const id = students.map(s => s.id);
const bigger = students.filter(s => s.id > 40);
const biggerOne = students.find(s => s.id > 40);
console.log(names, id, bigger, biggerOne);
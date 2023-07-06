const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90,
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120,
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100,
    },
    {
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110,
    },
    {
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105,
    },
];
const deepCopyStudents = students.map(st => ({ ...st }));
// const bestStudent  = deepCopyStudents.sort((a,b) => b.scores - a.scores)[0]
const bestStudent = students.reduce((acc, curr, index) => acc.scores > curr.scores
    ? acc
    : curr)
console.log('bestStudent', bestStudent);

const array = [
    { name: 'A', id: 1 },
    { name: 'B', id: 2 },
    { name: 'XC', id: 3 },
    { name: 'D', id: 1 },
    { name: 'WE', id: 1 },
];

const unique = [...new Set(array.map((item) => item.id))];
console.log(unique);

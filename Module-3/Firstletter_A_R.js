let array = [
    {"id": 1, "name": "Amit Kumar", "age": 25},
    {"id": 2, "name": "Rahul Dixit", "age": 20},
    {"id" :3, "name": "Ravi Joshi", "age": 55},
    {"id": 4, "name": "Rohit Verma", "age": 35},
    {"id" :5, "name": "Ajay Jain", "age": 17}
];

const A = array.filter(x => x.name[0]==='A');
console.log("List with names starting with A : ") 
console.log(A);
const R = array.filter(x => x.name[0]==='R');
console.log("List with names starting with R : ");
console.log(R);
let array = [
    {"id": 1, "name": "Amit Kumar", "age": 25},
    {"id": 2, "name": "Rahul Dixit", "age": 20},
    {"id" :3, "name": "Ravi Joshi", "age": 55},
    {"id": 4, "name": "Rohit Verma", "age": 35},
    {"id" :5, "name": "Ajay Jain", "age": 17}
];
const youngest = array.reduce((x,y) => x.age<y.age?x:y); 
const oldest = array.reduce((x,y) => x.age>y.age?x:y); 
console.log("Youngest : ");
console.log(youngest);
console.log("Oldest : ");
console.log(oldest);


let array = [10,1,42,36,4,75,6,97,81,19,10];
let count = 1;
let arr = [];

for(let i=0; i<array.length-1;i++)
{
 
    if(!arr.includes(array[i]))
    {
      arr.push(array[i]);
    }
    
      
}
console.log(arr);
//Sum
let array = [10,1,42,36,4,75,6,97,81,19,10];
const sum = array.reduce((x,y) => x+=y);
console.log("Sum = " + sum);

//Minimum
let min = array[0];
for(let i=0;i<array.length;i++)
{
  if(array[i]<min)
  {
    min = array[i];
  }
};

console.log("Minimum value = " + min);


//Maximum
let max = array[0];
for(let i=0;i<array.length;i++)
{
  if(array[i]>max)
  {
    max = array[i];
  }
};
console.log("Maximum value = " +max);
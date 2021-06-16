let array = [10,1,42,36,4,75,6,97,81,19,10];

const prime = x =>{ if(x==1 || x==0)
                    { 
                    return false;
                    }
                    else if(x==2)
                    {
                      return true;
                    }
                    else
                    {
                      for(let i=2 ; i<x; i++)
                      {
                        if(x%i==0)
                        return false;
                      }
                      return true;
                    }
};
let flag = 1;
for(let i=0;i<array.length;i++)
{
  if(prime(array[i]))
  {
    console.log("List has a Prime Number");
    flag=1;
    break;
  }
  else{
    flag=0;
};
}
if(!flag)
{
    console.log("List does not have a Prime Number");
}
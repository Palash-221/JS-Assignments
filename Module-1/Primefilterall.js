//If all are prime
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

let flag=0;
for(let i=0;i<array.length;i++)
{
  if(!prime(array[i]))
  {
    console.log("List is not full of Prime Numbers");
    break;
  }
  else{
  flag+=1;
  }
};
if(flag){
  console.log("List is full of Prime Numbers");
}




  


            
            
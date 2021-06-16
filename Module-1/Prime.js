let array = [0,1,2,3,4,5,6,7,8,9,10];
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

const prime1 = array.filter(x => prime(x));
console.log("Primes = " + prime1);
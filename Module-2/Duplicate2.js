let array=[10,1,42,36,4,75,6,97,81,19,10];

let filt = x => {
  return [...new Set(x)];
}
console.log(array);
console.log(filt(array));
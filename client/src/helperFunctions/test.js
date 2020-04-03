function descendingOrder(n) {
  const stringArray = n.toString().split("");
  console.log(stringArray)
  const numArray = stringArray.map(x => parseInt(x));
  console.log(numArray)
  numArray.sort(function(a, b) {
    return b - a;
  });
  return parseInt(numArray.join(""));
}
//console.log(descendingOrder(0));

function squareDigits(num){

  // const squareArray = numArray.map(x => x * x);
  return parseInt(num.toString().split('').map(x => parseInt(x) * parseInt(x)).join(""));
  
}

console.log(squareDigits(9119))
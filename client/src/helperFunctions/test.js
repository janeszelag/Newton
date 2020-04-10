function descendingOrder(n) {
  const stringArray = n.toString().split("");
  console.log(stringArray);
  const numArray = stringArray.map(x => parseInt(x));
  console.log(numArray);
  numArray.sort(function(a, b) {
    return b - a;
  });
  return parseInt(numArray.join(""));
}
//console.log(descendingOrder(0));

function squareDigits(num) {
  // const squareArray = numArray.map(x => x * x);
  return parseInt(
    num
      .toString()
      .split("")
      .map(x => parseInt(x) * parseInt(x))
      .join("")
  );
}

//console.log(squareDigits(9119))

function tribonacci(signature, n) {
  if (n == 0) {
    return [];
  }
  if (n == 1) {
    return [signature[0]];
  }
  if (n == 2) {
    return [signature[0], signature[2]];
  }

  const resultArr = [...signature];
  while (resultArr.length < n) {
    resultArr.push(
      resultArr[resultArr.length - 1] +
        resultArr[resultArr.length - 2] +
        resultArr[resultArr.length - 3]
    );
  }
  return resultArr;
}

//console.log(tribonacci([1, 1, 1], 0));

//"din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
//str.split('a').length - 1
function duplicateEncode(word) {
  const lowerWord = word.toLowerCase();
  let result = "";
  for (let letter of lowerWord) {
    if (lowerWord.split(letter).length - 1 > 1) {
      result += ")";
    } else {
      result += "(";
    }
  }
  return result;
}

//console.log(duplicateEncode("KathErine"))

function greatestProduct(input) {
  let highProduct = 0;
  for (let i = 0; i < input.length - 4; i++) {
    let product =
      parseInt(input[i]) *
      parseInt(input[i + 1]) *
      parseInt(input[i + 2]) *
      parseInt(input[i + 3]) *
      parseInt(input[i + 4]);
    if (product > highProduct) {
      highProduct = product;
    }
  }
  return highProduct;
}

//console.log(greatestProduct("92494737828244222221111111532909999"))

function digital_root(n) {
  numArr = n
    .toString()
    .split("")
    .map(x => {
      return parseInt(x);
    });
  while (numArr.length > 1) {
    let sum = numArr.reduce(function(a, b) {
      return a + b;
    });
    return digital_root(sum);
  }
  return parseInt(numArr.join(""));
}

//console.log(digital_root(3241));

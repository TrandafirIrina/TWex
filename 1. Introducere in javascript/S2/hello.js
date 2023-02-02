let sayHello = (name) => `Hello ${name}!`;
// 0 calea catre interpretor
// 1 calea catre fisier
// 2 calea catre argumentele din linia de
// comanda
console.log(sayHello(process.argv[2]));

let concatenareStringuri = (stringArray) =>
  stringArray.reduce((rezultat, strCurent) => rezultat + strCurent + " ", "");

console.log(concatenareStringuri(["Ana", "nu", "are", "mere"]));

function checkDivisible(n, divisor) {
  if (n % divisor) {
    return false;
  } else {
    return true;
  }
}

console.log(checkDivisible(10, 2));
console.log(checkDivisible(10, 3));

function nrCaractereDiferite(string1, string2) {
  if (string1.length === string2.length) {
    let nr = 0;
    for (let i = 0; i < string1.length; i++) {
      if (string1[i] !== string2[i]) nr++;
    }
    return nr;
  } else return -1;
}

console.log(nrCaractereDiferite("Ana", "ana"));
console.log(nrCaractereDiferite("adasda", "sda"));
console.log(nrCaractereDiferite("cutie", "crupa"));

let occurences = (text, character) => text.split(character).length - 1;
// let count = 0;
// for (var i = 0; i < text.length; i++) {
//   if (text.charAt(i) === character) count++;
// }
// return count;

console.log(occurences("sample text", "e"));
console.log("sample text".split("e"));

function stringToArray(string1, arr) {
  for (var i = 0; i < string1.length; i++) {
    arr.push(Number(string1.charAt(i)));
  }
  return arr;
}

console.log(stringToArray("12345678", new Array()));

function arguments(array, ...args) {
  //let args = arguments;
  //let array = args[0];
  // for (var i = 1; i < args.length; i++) {
  //   array.push(args[i]);
  // }
  for (var i = 0; i < args.length; i++) {
    array.push(args[i]);
  }
  return array;
}

let array = ["a"];

console.log(arguments(array, "b", "c").join(", "));

function imbinare(array1, array2) {
  let arrayNou = [];
  for (let i = 0; i < array1.length; i++) {
    arrayNou.push(array1[i]);
    arrayNou.push(array2[i]);
  }
  return arrayNou;
}

console.log(imbinare([1, 2, 3, 4], [5, 6, 7, 8]));

const checkPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (!(n % i)) {
      return false;
    }
  }
  return true;
};

if (process.argv.length < 3) {
  console.log("not enough params");
} else {
  console.log(checkPrime(parseInt(process.argv[2])));
}

function fibonacci(n) {
  let x1 = 1;
  let x2 = 1;
  let v = 0;
  for (let i = 1; i < n; i++) {
    v = x1 + x2;
    x1 = x2;
    x2 = v;
  }
  return v;
}

console.log(fibonacci(process.argv[2]));

const sampleString = "the quick brown fox jumps over the lazy dog";

const getCounts = (text) => {
  const words = text.split(" ");
  const result = {};
  for (let word of words) {
    if (word in result) {
      result[word]++;
    } else {
      result[word] = 1;
    }
  }
  for (let word in result) {
    result[word] /= words.length;
  }
  return result;
};

console.log(getCounts(sampleString));

const getLetterCount = (text) => {
  text = text.split(" ").join("");
  let result = {};
  for (let letter of text) {
    if (letter in result) {
      result[letter]++;
    } else {
      result[letter] = 1;
    }
  }
  for (let letter in result) {
    result[letter] /= text.length;
  }
  return result;
};

console.log(getLetterCount(sampleString));

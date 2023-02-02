const words = [
  "fox",
  "wolf",
  "snake",
  "crocodile",
  "lion",
  "cat",
  "crocodile",
  "horse"
];
const forbiddenWord = "crocodile";
const minLength = 4;

const filterWords = (words, forbiddenWord, minLength) =>
  words.filter((word) => word !== forbiddenWord && word.length >= minLength);

console.log(filterWords(words, forbiddenWord, minLength));

let aniNastere = [1999, 1990, 1985, 2009, 2014, 1967, 2020, 2000, 2011];

const filterAges = (aniNastere) =>
  aniNastere.map((an) => 2022 - an).filter((varsta) => varsta >= 18);

console.log(filterAges(aniNastere));

const getTotalArea = (squareDimensions) =>
  squareDimensions
    .map((side) => side * side)
    .reduce((prev, current) => prev + current, 0);

const squareDimensions = [3, 5, 12, 3, 5, 3];

const result = getTotalArea(squareDimensions);
console.log("result: ", result);

const sumaNrDiv = (array1, div) =>
  array1
    .filter((nr) => nr % div === 0)
    .reduce((prev, current) => prev + current, 0);

console.log(sumaNrDiv([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));

const formatString = (s, ...format) => {
  let modified = s;
  for (let i = 0; i < format.length; i++) {
    if (modified.indexOf("{" + i + "}") !== -1) {
      modified = modified.replace("{" + i + "}", format[i]);
    }
  }
  return modified;
};

console.log(
  formatString("this is a {0} string and we've {1} it", "nice", "formatted")
);

const formatare = (s, ...format) => {
  let modified = s;
  for (let elem of format) {
    for (let key in elem) {
      if (modified.indexOf("{" + key + "}") !== -1) {
        modified = modified.replace("{" + key + "}", elem[key]);
      }
    }
  }
  return modified;
};

console.log(
  formatare(
    "un {substantiv} este {adjectiv}",
    { substantiv: "calut" },
    { adjectiv: "dragut" }
  )
);

const sampleArray = [1, 2, 3, 4, 5];

const map = (array, transformation) => {
  const result = [];
  for (let element of array) {
    result.push(transformation(element));
  }
  return result;
};

console.log(map(sampleArray, (x) => x * 2));

const reduce = (array, transformation, initialValue) => {
  let result = initialValue;
  for (let elem of array) {
    result = transformation(result, elem);
  }
  return result;
};

console.log(reduce(sampleArray, (x, y) => x + y, 0));

const dictionary = [
  "the",
  "quick",
  "brown",
  "fox",
  "jumps",
  "over",
  "the",
  "lazy",
  "dog"
];

const sampleText = `
  best
  read
  on
  windy
  nights
`;

const checkAcrostih = (text, dictionary) => {
  const candidate = text
    .split("\n")
    .filter((e) => e)
    .map((e) => e.trim())
    .map((e) => e[0])
    .join("");
  return dictionary.indexOf(candidate) !== -1;
};

console.log(checkAcrostih(sampleText, dictionary));

const dictionar = ["este"];
const s = `javascript este minunat!`;

const cenzurare = (text, dictionar) => {
  dictionar.forEach((e) => {
    let val = e[0];
    for (let i = 1; i < e.length - 1; i++) val += "*";
    val += e[e.length - 1];
    text = text.replace(e, val);
  });
  return text;
};

console.log(cenzurare(s, dictionar));

const getFilteredObjects = (array, object) => {
  return array.filter((element) => {
    let result = false;
    Object.keys(object).forEach((key) => {
      if (!element[key] || element[key] !== object[key]) result = true;
    });
    return result;
  });
};

const laptops = [
  {
    brand: "HP",
    processor: "i5",
    ram: 8
  },
  {
    brand: "Lenovo",
    processor: "i5",
    ram: 16
  },
  {
    brand: "Acer",
    processor: "i5",
    ram: 8
  },
  {
    brand: "Asus",
    processor: "i7",
    ram: 8
  }
];

const rezultat = getFilteredObjects(laptops, {
  processor: "i5",
  ram: 8
});
console.log("result: ", rezultat);

const sortareDupaCheie = (array, cheie) => {
  return array.sort((a, b) => {
    if (cheie in a && cheie in b) {
      if (a[cheie] > b[cheie]) return 1;
      else if (a[cheie] < b[cheie]) return -1;
      else return 0;
    }
  });
};

console.log(sortareDupaCheie(laptops, "ram"));

const medieAritmetica = (array) =>
  array.reduce((prev, current) => prev + current / array.length, 0);

console.log(medieAritmetica(sampleArray));

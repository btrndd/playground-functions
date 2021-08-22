// Desafio 1
function compareTrue(boolean1, boolean2) {
  return boolean1 && boolean2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}

// Desafio 4
function concatName(arrayStrings) {
  let arrayFinal = [];
  let arrayIndexOf = 0;
  for (let index = 0; index < arrayStrings.length; index += 1) {
    arrayIndexOf = arrayStrings.indexOf(arrayStrings[index]);
    if (arrayIndexOf === 0 || arrayIndexOf === arrayStrings.length - 1) {
      arrayFinal.unshift(arrayStrings[index]);
    }
  }
  return arrayFinal.join(', ');
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}

// Desafio 6
function highestCount(arrayNumbers) {
  let count = 0;
  let arraySorted = arrayNumbers.sort(function (a, b) {
    return a - b;
  });
  let highestNumber = arraySorted[arraySorted.length - 1];
  for (let number of arrayNumbers) {
    if (number >= highestNumber) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = mouse - cat1;
  let distCat2 = mouse - cat2;
  if (Math.abs(distCat1) > Math.abs(distCat2)) {
    return 'cat2';
  } if (Math.abs(distCat2) > Math.abs(distCat1)) {
    return 'cat1';
  } if (Math.abs(distCat1) === Math.abs(distCat2)) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function checkInt(divisor, dividendo) {
  return dividendo % divisor === 0;
}

function buzz(number, result) {
  if (checkInt(5, number) === true && checkInt(3, number) === false) {
    result.push('buzz');
  }
}

function fizz(number, result) {
  if (checkInt(5, number) === false && checkInt(3, number) === true) {
    result.push('fizz');
  }
}

function bug(number, result) {
  if (checkInt(5, number) === false && checkInt(3, number) === false) {
    result.push('bug!');
  }
}

function fizzBuzz(arrayNumber) {
  let result = [];
  for (let number of arrayNumber) {
    if (checkInt(5, number) && checkInt(3, number)) {
      result.push('fizzBuzz');
    } else {
      fizz(number, result);
      buzz(number, result);
      bug(number, result);
    }
  }
  return result;
}

console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function stringToArray(string) {
  let letters = [];
  for (let letter of string) {
    letters.push(letter);
  }
  return letters;
}

function conversionEncode(index, letters) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let numbers = { 0: 1, 1: 2, 2: 3, 3: 4, 4: 5 };
  for (let vowel of vowels) {
    if (letters[index] === vowel) {
      letters[index] = numbers[vowels.indexOf(vowel)];
    }
  }
}

function conversionDecode(index, letters) {
  let numbers = ['1', '2', '3', '4', '5'];
  let vowels = { 0: 'a', 1: 'e', 2: 'i', 3: 'o', 4: 'u' };
  for (let number of numbers) {
    if (letters[index] === number) {
      letters[index] = vowels[numbers.indexOf(number)];
    }
  }
}

function encode(string) {
  let letters = stringToArray(string);
  let index = 0;
  while (index < letters.length) {
    conversionEncode(index, letters);
    index += 1;
  }
  return letters.join('');
}

function decode(string) {
  let letters = stringToArray(string);
  let index = 0;
  while (index < letters.length) {
    conversionDecode(index, letters);
    index += 1;
  }
  return letters.join('');
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};

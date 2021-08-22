// Desafio 10
function techList(technologies, personalName) {
  let technologieList = [];
  let myList = [];
  for (let technologie of technologies.sort()) {
    technologieList.push(technologie);
  }
  for (let index = 0; index < technologieList.length; index += 1) {
    myList.push({ tech: technologieList[index], name: personalName });
  }
  if (technologieList.length === 0) {
    return 'Vazio!';
  }
  return myList;
}

// Desafio 11
function splitDuplicates(array, number) {
  let numbers = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 };
  for (let index = 0; index < array.length; index += 1) {
    if (number === array[index]) {
      numbers[number] += 1;
    }
  }
  return numbers[number];
}

function countDuplicates(array) {
  let number = 0;
  let count = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 };
  while (number < 10) {
    count[number] += splitDuplicates(array, number);
    number += 1;
  }
  return count;
}

function checkDuplicates(array) {
  let count = countDuplicates(array);
  for (let index = 0; index < 10; index += 1) {
    if (count[index] >= 3) {
      return true;
    }
  }
}

function checkNumber(array, number) {
  return number < 0 || number > 9;
}

function generatePhoneNumber(numbers) {
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let number of numbers) {
    if (checkNumber(numbers, number) || checkDuplicates(numbers)) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  let phone = numbers.join('');
  let formatPhone = phone.replace(/(\d{2})?(\d{5})?(\d{4})/g, '($1) $2-$3');
  return formatPhone;
}

// Desafio 12
function testB(lineA, lineB, lineC) {
  let checkB = [lineA + lineC, Math.abs(lineA - lineC)];
  let boolB = false;
  if (checkB[0] > lineB && checkB[1] < lineB) {
    boolB = true;
  }
  return boolB;
}

function testC(lineA, lineB, lineC) {
  let checkC = [lineA + lineB, Math.abs(lineA - lineB)];
  let boolC = false;
  if (checkC[0] > lineC && checkC[1] < lineC) {
    boolC = true;
  }
  return boolC;
}

function testA(lineA, lineB, lineC) {
  let checkA = [lineB + lineC, Math.abs(lineB - lineC)];
  let boolA = false;
  if (checkA[0] > lineA && checkA[1] < lineA) {
    boolA = true;
  }
  return boolA;
}

function triangleCheck(lineA, lineB, lineC) {
  return testA(lineA, lineB, lineC) || testB(lineA, lineB, lineC) || testC(lineA, lineB, lineC);
}

// Desafio 13
function hydrate(string) {
  let matches = string.match(/(\d+)/g);
  let matchesNum = [];
  for (let index = 0; index < matches.length; index += 1) {
    matchesNum[index] = +matches[index];
  }
  let sum = 0;
  for (let index = 0; index < matches.length; index += 1) {
    sum += matchesNum[index];
  }
  if (sum === 1) {
    return `${sum} copo de água`;
  }
  return `${sum} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

/* 10 - Crie uma função de Lista de Tecnologias
Crie uma função que recebe um array de nomes de tecnologias que você quer aprender. Essa função deve receber também um segundo parâmetro chamado name com um nome.

Para cada tecnologia no array, crie um objeto com a seguinte estrutura:

{
  tech: "NomeTech",
  name: name
}
Estes objetos devem ser inseridos em uma nova lista em ordem crescente a partir do campo tech no objeto.

A saída da sua função deve ser uma lista de objetos ordenada pelo campo tech dos objetos com o formato acima.

Exemplo:

Entradas da função:

["React", "Jest", "HTML", "CSS", "JavaScript"]
"Lucas"

// Saída:

[
  {
    tech: "CSS",
    name: "Lucas"
  },
  {
    tech: "HTML",
    name: "Lucas"
  },
  {
    tech: "JavaScript",
    name: "Lucas"
  },
  {
    tech: "Jest",
    name: "Lucas"
  },
  {
    tech: "React",
    name: "Lucas"
  }
]
Caso o array venha vazio sua função deve retornar 'Vazio!'

O que será verificado:

Retorne uma lista de objetos ordenados quando é passada uma lista com 5 tecnologias

Retorne a mensagem de erro 'Vazio!' quando a lista não tiver tecnologias */
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

/* 11 - Crie uma função de Número de Telefone
Crie uma função chamada generatePhoneNumber que receba uma array com 11 números e retorne um número de telefone, respeitando parênteses, traços e espaços.

Exemplo: caso o parâmetro da função seja [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1], generatePhoneNumber deverá retornar (12) 34567-8901.

Se a função receber um array com tamanho diferente de 11, a mesma deve retornar "Array com tamanho incorreto.".

Caso algum dos números da array seja menor que 0, maior que 9 ou se repita 3 vezes ou mais, generatePhoneNumber deverá retornar a string "não é possível gerar um número de telefone com esses valores".

O que será verificado:

Retorne a string "Array com tamanho incorreto." caso o array tenha o tamanho diferente de 11

Retorne a string "não é possível gerar um número de telefone com esses valores" caso algum dos números do array seja menor que 0

Retorne a string "não é possível gerar um número de telefone com esses valores" caso algum número do array seja maior que 9

Retorne a string "não é possível gerar um número de telefone com esses valores" caso algum número do array se repetir 3 vezes ou mais

Retorne um número de telefone, respeitando parênteses, traços e espaços caso os números do array estejam de acordo com as especificações */
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

/* 12 - Crie uma função de Condição de existência de um triângulo
Um triângulo é composto de três linhas: lineA, lineB e lineC. Crie uma função chamada triangleCheck que deverá receber as três linhas como parâmetro e retornar se é possível formar um triângulo com os valores apresentados de cada linha.

Para tanto, tenha em mente algumas considerações:

Para que seja possível formar um triângulo, é necessário que a medida de qualquer um dos lados seja menor que a soma das medidas dos outros dois e maior que o valor absoluto da diferença entre essas medidas.

Para obter o valor absoluto de um número em JavaScript, pesquise pela função Math.abs.

O retorno da sua função deverá ser um booleano.

Exemplo: o retorno de triangleCheck(10, 14, 8) deverá ser true.

O que será verificado:

Retorne false quando a medida de qualquer um dos lados seja maior que a soma das medidas dos outros dois.

Retorne false quando a medida de qualquer um dos lados seja menor que o valor absoluto da diferença entre essas medidas.

Retorne true quando a medida de qualquer um dos lados seja menor que a soma das medidas dos outros dois e maior que o valor absoluto da diferença entre essas medidas. */
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

/* 13 - Crie uma função de boas vindas ao Bar da Trybe!
Segundo as regras desse bar, a cada bebida deve-se beber um copo de água para que não se tenha ressaca.

Crie a função hydrate que recebe uma string, e retorne a sugestão de quantos copos de água você deve beber. Exemplos:

String recebida:
  "1 cerveja"
String retornada:
  "1 copo de água"
String recebida:
  "1 cachaça, 5 cervejas e 1 copo de vinho"
String retornada:
  "7 copos de água"
String recebida:
  "1 cachaça, 5 cervejas e 1 copo de vinho"
String retornada:
  "7 copos de água"
Notas

Para simplificar, consideraremos que qualquer coisa com um número à frente é uma bebida e que a sua string sempre virá com o formato quantidade (em número) + tipo da bebida.

O número na frente de cada bebida está no intervalo entre 1 e 9.

Dica: pesquise por algo similar a get all integers inside a string js.

O que será verificado:

Retorne a sugestão de quantos copos de água deve-se beber ao receber uma string */
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

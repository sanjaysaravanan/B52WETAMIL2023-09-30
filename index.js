const arr = [1, 2, 3, 4, 5, 6];


// key value pairs
const obj = {
  name: 'Sanjay',
  role: 'Mentor',
  batch: 'B52WETAMIL'
}

// frequency of array and max repeating element
const frequency = {};

const inputArr = userInput[0].split(' ');


for (let i = 0; i < inputArr.length; i++) {

  if (frequency[inputArr[i]] === undefined) {
    frequency[inputArr[i]] = 1;
  } else {
    frequency[inputArr[i]] = frequency[inputArr[i]] + 1;
  }

}

let maxRepElement = inputArr[0];

for (let i = 0; i < inputArr.length; i++) {

  if (frequency[inputArr[i]] > frequency[maxRepElement]) {
    maxRepElement = inputArr[i];
  }
}



console.log(maxRepElement);
// 1 2 3 4 4 5 4 5 7 3 2
// { '1': 1, '2': 2, '3': 2, '4': 3, '5': 2, '7': 1 } 
// i = 0, maxRepElement = '1', frequency['1'] > frequency['1'] -> 1 > 1 -> false
// i = 1, maxRepElement = '1', frequency['2'] > frequency['1'] -> 2 > 1 -> true, maxRepElement = '2' 
// i = 2, maxRepElement = '2', frequency['3'] > frequency['2'] -> 2 > 2 -> false, maxRepElement = '2'
// i = 3, maxRepElement = '2', frequency['4'] > frequency['2'] -> 3 > 2 -> true, maxRepElement = '4'


// smallest element of an array const inpArr = userInput[0].split(' ');

let minElement = inpArr[0];

for (let i = 0; i < inpArr.length; i++) {

  if (inpArr[i] < minElement) {
    minElement = inpArr[i];
  }

}

console.log(minElement);


// Find the first index of an element, if no element found prints -1
const inputLine1 = userInput[0].split(' ');
const N = inputLine1[0];
const k = inputLine1[1];
const inpArr = userInput[1].split(' ');

let index = -1;

for (let i = 0; i < inpArr.length; i++) {
  if (k === inpArr[i]) {
    index = i;
    break;
  }
}

console.log(index);


// removing repeating chars with object
const line = userInput[0];
const freqChars = {};

for (let i = 0; i < line.length; i++) {
  if (freqChars[line[i]] === undefined) {
    freqChars[line[i]] = 1;
  } else {
    freqChars[line[i]] = freqChars[line[i]] + 1;
  }
}

let result = '';

for (let i = 0; i < line.length; i++) {
  if (freqChars[line[i]] === 1) {
    result += line[i];
  }
}


console.log(result);


const line = userInput[0];
const chars = [];
let charIndex = 0;
const freqs = [];

for (let i = 0; i < line.length; i++) {
  if (chars.indexOf(line[i]) === -1) {
    chars[charIndex] = line[i];
    freqs[charIndex] = 1;
    charIndex++;
  } else {
    freqs[chars.indexOf(line[i])] = freqs[chars.indexOf(line[i])] + 1;
  }
}

let result = '';

for (let i = 0; i < line.length; i++) {
  if (freqChars[line[i]] === 1) {
    result += line[i];
  }
}


console.log(result);
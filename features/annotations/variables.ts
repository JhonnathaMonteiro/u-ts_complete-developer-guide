let apples: number = 5;
let speed: string = 'fast';

let notingMuch: null = null;
let nothing: undefined = undefined;

// Array
let colors: string[] = ['red', 'gree', 'blue'];
let numeros: number[] = [1, 2, 4, 5];

// Classes
class Car {}

let car: Car = new Car();

// Object Literal
let point: { x: number; y: number } = {
  x: 23,
  y: 12,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations

// 1) Function that returns a any type
const json = '{"x": 10, "y": 20}';
const coordinates: {x: number, y: number} = JSON.parse(json);
console.log(coordinates);

// 2) When we declare a variable in one line and initialize later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if(words[i] === 'green'){
    foundWord = true;
  } 
}

// 3) When we want a variable to have a variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAbovezero: number | boolean = false;
for (let i = 0; i < numbers.length; i++) {
  if(numbers[i] > 0){
    numberAbovezero = numbers[i];
  } 
}
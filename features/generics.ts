class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfString {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything<string>(['a', 'b', 'c']);
printAnything(['a', 'b', 'c']); // Type inference

// Generic Constraints

class Carro {
  print() {
    console.log('I am a Car');
  }
}
class House {
  print() {
    console.log('I am a House');
  }
}

interface Printeable {
  print(): void;
}

function printHouseOrCars<T extends Printeable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

interface Lengthy {
  length: number;
}

function countAndPrint<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value';
  if (element.length > 0) {
    descriptionText = 'Got a value size:' + element.length;
  }
  return [element, descriptionText];
}

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
): T[U] {
  return obj[key];
}

const names: Readonly<number[]> = [1, 2, 3];
// names.push(2) error

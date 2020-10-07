function Logger(logString: string) {
  console.log(logString);

  return function (target: Function) {
    console.log('Logging...');
    console.log(target);
  };
}

@Logger('LOGGIN - PERSON')
class Person {
  name = 'max';
  constructor() {
    console.log('Creating person object...');
  }
}

// const person = new Person();

// console.log(person);

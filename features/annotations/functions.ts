const add = (a: number, b: number) => {
  return a + b
};

const subtract = (a: number, b: number): number => {
  return a - b
}

function divide( a: number, b : number) : number {
  return a / b
}

const multiply = function(a: number, b: number): number {
  return a * b
}

const logger = (message: string): void => {
  console.log(message);
}

const throwError = (message: string): void => {
  if(!message) {
    throw new Error(message);
  }
};

const forecast = {
  date: new Date(),
  wheather: 'sunny'
};

const logWeather = ({date, wheather}: {date: Date, wheather: string}): void => {
  console.log(date)
  console.log(wheather)
}

logWeather(forecast)
interface Reportable {
  summary(): string 
}


const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary() {
    return `Name: ${this.name}`
  }
};

const sugarDrink = {
  color: "xxx",
  sugar: false,
  broken: true,
  summary() {
    return `Name: ${this.name}`
  }
};

const printSummary = (item: Reportable): void => {
  console.log(`Name: ${item.summary()}`);
};

printSummary(oldCivic);
printSummary(sugarDrink);
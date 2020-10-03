class Vehicle {
  // color: string;

  constructor(public color: string) {}

  drive(): void {
    console.log('Chuga chuga');
  }
  honk(): void {
    console.log('Beep');
  }
}

class Carr extends Vehicle {

  constructor(public wheels: number, color: string) {
    super(color);
  }

  drive() {
    console.log('Vruum');
  }

  private privateMethod() {
    console.log('This method can only be called by other methods inside this class');
  }
  
  protected protectedMethod() {
    this.privateMethod();
    console.log('This method can only be called by other methods inside this class, or child classes');
  }
}

const carr = new Carr(4, 'green');
console.log(carr.color);
// carr.drive();
// carr.honk();

const vehicle = new Vehicle('red');
console.log(vehicle.color);

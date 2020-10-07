// Intersection type (also works fine with interfaces)
type Admin = {
  name: string;
  privileges: string[];
};

type Employees = {
  name: string;
  startDate: Date;
};

type ElevetadeEmployees = Admin & Employees;

// Function overload
type Combinable = number | string;

function adder(a: number, b: number): number;
function adder(a: string, b: string): string;
function adder(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = adder('max', '');

// Optional chaining

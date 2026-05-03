//* function types
//* normal function ,arrow function;

function normalAdd(num1: number, num2: number): number {
  return num1 + num2;
}

normalAdd(12, 12);

//arrow
const arrowAdd = (num1: number, num2: number): number => {
  return num1 + num2;
};

console.log(arrowAdd(10, 20));

//object method types define
const newtonCondition = {
  name: "Newton",
  salary: 0,
  addSalary(money: number): number {
    const newSalary = this.salary + money;
    this.salary += newSalary;
    return newSalary;
  },
};

newtonCondition.addSalary(25000);

console.log(newtonCondition.salary);

// callback function type define

const number = [2, 3, 4, 6, 9];

const sqrNumber = number.map((number: number): number => number * number);

console.log(sqrNumber);

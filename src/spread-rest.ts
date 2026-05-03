//* spread

//*Array

const number1: number[] = [1, 2, 3, 4, 5, 6];
const number2: number[] = [7, 8, 9];

const allNumber: number[] = [...number1, ...number2];

// console.log(allNumber);

//*obj

const myName: {
  name: string;
  surName: string;
} = {
  name: "Newton",
  surName: "Bepari",
};

const extraInfo: { age: number; nationality: string } = {
  age: 21,
  nationality: "Bangladeshi",
};

const myAllDetails = { ...myName, ...extraInfo };

// console.log(myAllDetails);

//* Rest
//arr
let arr = [1, 2, 3, 4, 5, 6];

const getNumber = (...arr: number[]) => {
  console.log(...arr);
  arr.forEach((n: number) => console.log(n));
};

// console.log(getNumber(...arr));

const num3 = ["Newton", "Bepari"];

const [name, ...all] = num3;

// console.log(name);

//obj

const getAllDetails = (...myAllDetails: Object[]): object => {
  return myAllDetails;
};


console.log(getAllDetails(myAllDetails))

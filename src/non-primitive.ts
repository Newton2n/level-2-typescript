//* non primitive data

//? arr

//* number array explicit
let numberArr: number[] = [1, 2, 3, 4];

//* multi type arr
//? |(OR) union type 
let mixedArr: (string | number)[] = [
  "Newton",
  12,
  "Bepari",
  "level",
  2,
  "Batch",
  7,
];

//* tuple

let number: [number, number] = [1, 2];
//fixed data type and length
let newtonBatch: [string, number, string, number] = ["Level", 2, "batch", 7];
//fixed data type and length
let destination: [string, number] = ["gournadi to barishal", 31];

//* Object

let userDetails: {
  readonly organizationCourse: string; // read only can not modify in future
  firstName: string;
  middleName?: string; //! optional (?)
  lastName: string;
  old: number;
  isMarried?: boolean; //! option key
  isHuman: "Yes"; // value can be direct type
} = {
  organizationCourse: "programming hero level 2",
  firstName: "Newton",
  lastName: "Bepari",
  old: 21,
  isMarried: false,
  isHuman: "Yes",
};

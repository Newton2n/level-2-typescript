//type alias
// obj
type User = {
  readonly id: string;
  name: {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
  phoneNumber: string;
  email: string;
  readonly location: {
    readonly country: string;
    district: string;
  };
  additionalAddress: {
    isMarried: boolean;
  };
};

const user1: User = {
  id: "12123213",
  name: {
    firstName: "Newton",
    lastName: "Bepari",
  },
  phoneNumber: "018122112",
  email: "newton@gmail.com",
  location: {
    country: "Bangladesh",
    district: "Barishal",
  },
  additionalAddress: {
    isMarried: false,
  },
};

user1.phoneNumber = "0191231231231231";
// user1.id = "N12213123128933ev"; //! can not change read only
// user1.location = { country: "India", district: "Delhi" };//! also cannot change nested data if read only

//* function
type TwoSum = (number1: number, number2: number) => number;

// const sum = (number1: number, number2: number): number => number1 + number2;

const sum: TwoSum = (number1, number2) => number1 + number2;

//* array

type Arr = [string, number];

const arr: Arr = ["Newoton", 1068];

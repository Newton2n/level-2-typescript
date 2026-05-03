// type User = {
//   name: string;
//   phoneNumber: string;
//   skill: string[];
// };

interface UserDetails {
  name: string;
  phoneNumber: string;
  skill: string[];
}

interface ExtraDetails {
  additionalInfo: {
    contactEmail: string;
    hobby: string[];
  };
}

interface UserFullDetails extends UserDetails, ExtraDetails {
  location: {
    country: string;
  };
}

const user1: UserFullDetails = {
  name: "Newton",
  phoneNumber: "018121212",
  skill: ["Programming , web development"],
  additionalInfo: {
    contactEmail: "newton@gmail.com",
    hobby: ["lot of hobby"],
  },
  location: {
    country: "Bangladesh",
  },
};

// console.log(user1);
interface TwoSum {
  (num1: number, num2: number): number;
} //Direct function

const twoSum: TwoSum = (num1, num2) => {
  return num1 + num2;
};
console.log(twoSum(12, 12));

interface Methods {
  add: (num: number) => number;
  count: () => number;
  checkUser(id: string): boolean;
}

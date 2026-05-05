// *Union (|) OR
// ? OR(|) means any of define types only or many can be written

type user = "admin" | "freeUser" | "guest"; // in here any one one can be

const getAccess = (user: user): string => {
  if (user === "admin") {
    return "Welcome";
  } else if (user === "freeUser") {
    return "hey, right now you time to pay ";
  } else {
    return "Please log in/sign up  first";
  }
};

console.log(getAccess("guest"));
console.log(getAccess("admin"));
// console.log(getAccess("hacker")); //!  error instant before run

//? intersection

type Employee = {
  name: string;
  phoneNumber: string;
  experienceYear: number;
};

type Manager = {
  teamName: string;
  teamMemberSize: number;
};

type EmployeeManager = Employee & Manager; //* when a new obj assign to type of EmployeeManager the obj need both type obj

const manager: Employee & Manager = {
  name: "Newton",
  phoneNumber: "0191221",
  experienceYear: 4,
  teamName: "Solid as rock",
  teamMemberSize: 8,
};

//? null

type User = {
  name: string;
};
type GetUserDetails = (userId: string) => User | null; //* if user is not available in DB then it will return null

const GetUserDetails: GetUserDetails = (userId) => {
  if (userId === "Match") {
    return {
      name: "Newton",
    };
  } else {
    return null;
  }
};

//?Unknown

type UnknownApiType = (url: string) => unknown; // Return unknown type of data
const getUnknownApiData: UnknownApiType = (url) => {
  return {
    h1: "big text",
  };
};

getUnknownApiData("hello");

//? never
//* a function that give error or never return something

const err = (): never => {
  throw new Error("Something unexpected happen");
};

//*void
//* void type mean a function perform something but did not return something

const twoSum = (num1: number, num2: number): void => {
  console.log(num1 + num2);
};

type NormalFunction = (input: string) => string;


function addName :NormalFunction (input){ 
    return "hello"
}
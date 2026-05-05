//? key of in ts
//* get all key from a type
interface Gamer {
  name: string;
  gameName: string;
  region: string;
  device: "mobile" | "pc";
}

type GamerTypeKey = keyof Gamer;

const gamer1: GamerTypeKey = "name";
const gamer: GamerTypeKey = "name";

const gamerNewton: Gamer = {
  name: "Newton ",
  gameName: "free fire",
  region: "Bangladesh",
  device: "mobile",
};

// const accessObjValue = (obj: Gamer, key: keyof Gamer): string => {
//   return obj[key];
// }; //! non re useable

//*re useable
const accessObjValue = <T>(obj: T, key: keyof T) => {
  return obj[key];
};

console.log(accessObjValue(gamerNewton, "name"));

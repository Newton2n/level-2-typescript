//? ternary operator ? :

// ?? nullish

//? optional chaining

const age = 18;

const timeToMarry = age >= 21 ? true : false;

type CheckIsTimeToMarry = (age: number) => boolean;
const checkIsTimeToMarry: CheckIsTimeToMarry = (age) => {
  const isReady = age >= 21 ? true : false;
  return isReady;
};

// console.log(checkIsTimeToMarry(21));
// console.log(checkIsTimeToMarry(20));

// ?? nullish
// * if left side is null or undefined  right side will available
//*   ?? "NOT NUll or UNDEFINED"

const nothing: undefined | null = null;

const isNull = nothing ?? "Yes that was null or undefined"; //? if nothing is null or undefined right side code will work  if anything except null and undefined it will direct assign the left side value

console.log(isNull);

// ? optional chaining

const user = {
  // name: "Newton",
  old: 21,
  extraInfo: {
    marriedStatus: false,
    relatives: {},
  },
};

// console.log(user?.name);  //! if optional user if the value is not available it will give undefined not error

// console.log(user?.extraInfo?.kids)

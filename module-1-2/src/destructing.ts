//*Destructing

//?obj

const user = {
  name: "Newton",
  age: 21,
  phoneNumber: "0180000001",
  extraDetails: {
    hobby: "Playing Cricket",
    expertise: ["modern technology", "slow brain"],
  },
};

const {
  name,
  age,
  phoneNumber: myPhoneNumber, // change name
  extraDetails: { hobby, expertise },
} = user;

// console.log(name, age, myPhoneNumber, hobby);

// console.log(expertise);

const arr = ["Newton", "Coding", "Money", "Family"];

// const [myname, earningSource, earn, life] = arr;
const [myname, ...rest] = arr;
const [, , money] = arr;
// console.log(myname, earningSource, earn, life);

// console.log(myname);
// console.log(...rest);
console.log(money);

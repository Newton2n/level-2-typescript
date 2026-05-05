//? function generic

//* by function expression
function createArrByGeneric<X>(value: X): X {
  return value;
}

console.log(createArrByGeneric<number>(10));
console.log(createArrByGeneric<string>("NxC"));

//? by arrow function

const createArrByGenericArrow = <T>(value: T): T => {
  return value;
};

// console.log(createArrByGenericArrow("hello"));
console.log(
  createArrByGenericArrow<{ name: string }>({
    name: "Newton ",
  }),
);

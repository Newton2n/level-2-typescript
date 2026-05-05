// //?Generic

// const arrayOfStr: string[] = ["newton", "bepari"];
// const arrayOfNum: number[] = [21, 23];
// const arrayOfObj: object[] = [{}, {}];

type GenericArr<T> = Array<T>;

//? generic

const arrayOfNum2: GenericArr<number> = [1, 2, 3, 4];
const arrayOfStr2: GenericArr<string> = ["n", "b"];

type Obj = {
  name: string;
};
const arrayOfObj2: GenericArr<Obj> = [
  {
    name: "Newton",
  },
  { name: "Beprari" },
];

// tuple

type Coordinates<X, Y = null> = [X, Y?];

type ObjTupleGeneric<X, Y> = {
  name: X;
  doc: Y;
};

const myLocationCorStr: Coordinates<string, string> = ["1245", "3672"];
const myLocationCorStr2: Coordinates<string, string> = ["1245"];

console.log(myLocationCorStr2);
const myLocationCorNum: Coordinates<number, number> = [1245, 3672];

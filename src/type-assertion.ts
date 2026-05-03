//? type assertion
//* explicit define a type after first type
const name: any = "Newton";

// console.log((name as string).toUpperCase());

type KgToGram = (kgInput: string | number) => string | number | undefined;
const kgToGram: KgToGram = (kgInput) => {
  if (typeof kgInput === "number") {
    return kgInput * 1000;
  } else if (typeof kgInput === "string") {
    const [kg] = kgInput.split(" ");
    const kgToGram = Number(kg) * 1000;
    console.log(kg);
    return kgToGram.toString();
  }
};

const result1 = kgToGram(5) as number;
const result2 = kgToGram("15 kg") as string;

console.log(result1?.toLocaleString());
console.log(result2.toUpperCase());

type ErrorObj = {
  message: string;
};
try {
} catch (error) {
  error as ErrorObj;
}

let obj = {
  message: "error",
  extraError: "",
};

console.log(obj as ErrorObj);

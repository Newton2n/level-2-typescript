//? constraint
//* explicit tell a generic type some default types
//* write by X extend UserBasicInfoType

type User = {
  id: string;
  email: string;
  number: string;
};

const createUser = <T extends User>(userDetails: T): T => {
  return userDetails;
};

type CreationDate = {
  creationTime: string;
};

console.log(
  createUser<CreationDate & User>({
    creationTime: "121221",
    id: "121212",
    email: "@com",
    number: "!2212112",
  }),
);

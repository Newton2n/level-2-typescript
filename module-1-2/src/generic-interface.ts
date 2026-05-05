type PostId = string[];

type ExtraDetails = {
  firstName: string;
  lastName: string;
  accountCreationDate: string;
};

interface User<X, Y = null> {
  id: string;
  fullName: string;
  userName: string;
  postId: X;
  extraDetails?: Y;
  userType: "Basic" | "Premium" | "Free";
}

const freeUser: User<PostId> = {
  id: "121908721",
  fullName: "Newton Bepari",
  userName: "newton96",
  postId: ["1219271921", "9879123123", "1887127211"],
  userType: "Free",
};

const proUser: User<PostId, ExtraDetails> = {
  id: "89712121",
  fullName: "Rich ",
  userName: "rich1212",
  postId: ["6555634534", "96545464564", "456456412"],
  extraDetails: {
    firstName: "RIch",
    lastName: "Pe",
    accountCreationDate: "now",
  },
  userType: "Premium",
};

// enum UserType {
//   admin = "admin",
//   guest = "guest",
// }

// const newton: UserType = UserType.admin;

// console.log(newton)

const UserType = {
  admin: "ADMIN",
  guest: "GUEST",
  //   admin: "admin",
  //   guest: "guest",
} as const; // better way to write enum

console.log(UserType);

const addUser = (user: (typeof UserType)[keyof typeof UserType]): boolean => {
  if (user === UserType.admin) {
    return true;
  } else if (user === UserType.guest) {
    return false;
  }
  return false;
};

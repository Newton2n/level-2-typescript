//! enum

type UserRoleType = "admin" | "user" | "guest";
enum UserRoles {
  admin = "admin",
  user = "user",
  guest = "guest ",
}

const user1Role: UserRoles = UserRoles.admin;

//* normal way
// const checkUserAccess = (userType: UserRoleType) => {
//   if (userType === "admin") {
//     return "admin have access to all website";
//   } else if (userType === "user") {
//     return "user is ok to use web";
//   } else {
//     return "sorry log in";
//   }
// };

//!enum
const checkUserAccess = (userType: UserRoles) => {
  if (userType === UserRoles.admin) {
    return "admin have access to all website";
  } else if (userType === UserRoles.user) {
    return "user is ok to use web";
  } else {
    return "sorry log in";
  }
};

console.log(checkUserAccess(user1Role)); //! error on strip mode must on flag to run

"use strict";
// enum UserType {
//   admin = "admin",
//   guest = "guest",
// }
// const newton: UserType = UserType.admin;
// console.log(newton)
const UserType = {
    admin: "admin",
    guest: "guest",
};
console.log(UserType);
const addUser = (user) => {
    if (user === UserType.admin) {
        return true;
    }
    else if (user === UserType.guest) {
        return false;
    }
    return false;
};

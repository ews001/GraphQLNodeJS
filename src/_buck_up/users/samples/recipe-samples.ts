import { User } from "../types/user.types";



export function createUserExample() {
  return [
    createUser({
      creationDate: new Date("2018-04-15"),
      fullName: "ber"
    }),
    createUser({
      creationDate: new Date("2018-04-12"),
      fullName: "jesus"
    })
  ]

}

function createUser(userData: Partial<User>) {
  return Object.assign(new User(), userData);
}
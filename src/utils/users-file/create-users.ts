import { writeFile } from "fs"
import { User } from "../../types";
import { writeToFile } from "./write-file";

export function createUsers(users: User) {

    const stringifiedUsers = JSON.stringify(users, null, 2);
    
   writeToFile(stringifiedUsers)
}
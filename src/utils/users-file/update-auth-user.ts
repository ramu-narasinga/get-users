// Reference: https://www.geeksforgeeks.org/how-to-add-data-in-json-file-using-node-js/
import { readFileSync } from "fs"
import { User } from "../../types";
import { writeToFile } from "./write-file";

export function updateAuthUser(user: User) {
    let users = readFileSync(`${process.cwd()}/data/users.json`);
    let parsedUsers = JSON.parse(users);
    parsedUsers.push(user);
    console.log("process.cwd()", process.cwd(), "parsedUsers:: ", parsedUsers);
    writeToFile(JSON.stringify(parsedUsers, null, 2))
}
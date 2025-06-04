import { writeFile } from "fs"
import { User } from "../types";

export function createUsers(users: User) {

    const jsonData = JSON.stringify(users, null, 2);
    
    writeFile("data/users.json", jsonData, 'utf8', (err) => {
        if (err) {
            console.error('Error writing to file', err);
        } else {
            console.log('Data written to file');
        }
    });
}
import { createUsers } from "../utils/users-file/create-users";
import { headers } from "../utils/get-users-headers";

export async function getUsers() {
    const url = "https://challenge.sunvoy.com/api/users";
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: headers
        });
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json);
        createUsers(json);
    } catch (error) {
        console.error(error.message);
    }
}

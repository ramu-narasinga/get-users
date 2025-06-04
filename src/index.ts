import { getUsers } from "./get-users";

export async function init() {
    await getUsers();
}

init();
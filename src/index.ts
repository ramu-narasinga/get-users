import { getUsers } from "./scripts/get-users";
import { getCurrentUser } from "./scripts/get-current-user";

export async function init() {
    await getUsers();
    await getCurrentUser();
}

init();
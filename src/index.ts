import { getUsers } from "./scripts/get-users";
import { getCurrentUser } from "./scripts/get-current-user";

export async function init() {
    try {
        await getUsers();
        await getCurrentUser();
    } catch(error) {
        console.log("[init] Error encountered in init", error);
    }
}

init();
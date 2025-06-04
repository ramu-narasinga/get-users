import { createUsers } from "../utils/create-users";
import { headers } from "../utils/get-current-user-headers";

async function callSettingsToken() {
    const url = "https://challenge.sunvoy.com/settings/tokens";
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: headers
        });
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const text = await response.text();
        console.log("callSettingsToken", text);
    } catch (error) {
        console.error(error.message);
    }
}

export async function getCurrentUser() {
    const url = "https://api.challenge.sunvoy.com/api/settings";
    try {

        // Refer to: https://medium.com/deno-the-complete-reference/sending-form-data-using-fetch-in-node-js-8cedd0b2af85
        // const body = new FormData();
        // body.set("access_token", "56abc0b2dde35e3acf0a30a71c8e4982e3e5ba66838d7720f9ce9b2ab07a80cc");
        // body.set("apiuser", "demo@example.org");
        // body.set("language", "en_US");
        // body.set("openId", "openid456");
        // body.set("operateId", "op789");
        // body.set("timestamp", "1749059398");
        // body.set("userId", "88619348-dbd9-4334-9290-241a7f17dd31");
        // body.set("checkcode", "E4565CD7EC44ED9339C62B83EF51E13FB088BE01");

        const response = await fetch(url, {
            method: "POST",
            // body
        });
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log("getCurrentUser", json);
    } catch (error) {
        console.error(error.message);
    }
}

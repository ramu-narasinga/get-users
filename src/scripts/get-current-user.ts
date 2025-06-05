import { createUsers } from "../utils/create-users";
import { headers } from "../utils/get-current-user-headers";
import { getSettingsPayload } from "../utils/parse-response-text";

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
        return getSettingsPayload(text);
    } catch (error) {
        console.error(error.message);
    }
}

export async function getCurrentUser() {
    const url = "https://api.challenge.sunvoy.com/api/settings";
    try {

        let payload = await callSettingsToken();
        console.log("[getCurrentUser]", payload);

        // Refer to: https://medium.com/deno-the-complete-reference/sending-form-data-using-fetch-in-node-js-8cedd0b2af85
        const body = new FormData();
        body.set("access_token", payload.access_token);
        body.set("apiuser", payload.apiuser);
        body.set("language", payload.language);
        body.set("openId", payload.openId);
        body.set("operateId", payload.operateId);
        body.set("timestamp", payload.timestamp);
        body.set("userId", payload.userId);
        body.set("checkcode", payload.checkcode);

        const response = await fetch(url, {
            method: "POST",
            body
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

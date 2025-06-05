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
        body.append("access_token", payload.access_token);
        body.append("apiuser", payload.apiuser);
        body.append("language", payload.language);
        body.append("openId", payload.openId);
        body.append("operateId", payload.operateId);
        body.append("timestamp", payload.timestamp);
        body.append("userId", payload.userId);
        body.append("checkcode", payload.checkcode);

        console.log("body", body)

        // Copied from: https://stackoverflow.com/a/48950600
        const queryString = new URLSearchParams(body).toString()

        console.log("queryString", queryString);

        const response = await fetch(url, {
            method: "POST",
            "headers": {
                "accept": "*/*",
                "accept-language": "en-US,en;q=0.9",
                "content-type": "application/x-www-form-urlencoded",
                "priority": "u=1, i",
                "sec-ch-ua": "\"Google Chrome\";v=\"137\", \"Chromium\";v=\"137\", \"Not/A)Brand\";v=\"24\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"macOS\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-site",
                "Referer": "https://challenge.sunvoy.com/",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            body: queryString
        });
        if (!response.ok) {
            throw new Error(`Response status: ${response.status} ${response.headers.get("content-type")}`);
        }

        const json = await response.json();
        console.log("getCurrentUser", json);
    } catch (error) {
        console.error(error.message);
    }
}

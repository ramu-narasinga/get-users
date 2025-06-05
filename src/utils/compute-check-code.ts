import * as crypto from "crypto"

// This below code snippet is inspired from:
// 1. https://challenge.sunvoy.com/js/settings.fefd531f237bcd266fc9.js
// 2. https://github.com/amachang/facebook-node-sdk/blob/54b4a4356db40a8c71a9d883e553fa056f28b3f0/util/create_signed_request.js#L10
export function computeCheckCode(query: string) {
    console.log("[compuetCheckCode]", query);

    let hmac = crypto.createHmac("sha1", "mys3cr3t");
    hmac.update(query);

    return hmac.digest("hex").toUpperCase();;
}
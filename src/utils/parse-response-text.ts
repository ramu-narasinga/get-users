import * as cheerio from 'cheerio';
import { computeCheckCode } from './compute-check-code';


// Takes the response text and returns the parsed values as an object
function parseResponseText(response: string) {

    console.log("[praseResponseText]", response);

    const $ = cheerio.load(response);

    console.log("[parseResponseText] access token", $("#access_token").val());

    let access_token = $("#access_token").val() as string;
    let apiuser = $("#apiuser").val() as string;
    let language = $("#language").val() as string;
    let openId = $("#openId").val() as string;
    let operateId = $("#operateId").val() as string;
    let userId = $("#userId").val() as string;
    let timestamp = Math.floor(Date.now() / 1e3).toString();

    return {
        access_token,
        apiuser,
        language,
        openId,
        operateId,
        userId,
        timestamp
    }
}

export function getSettingsPayload(response) {
    let payload = parseResponseText(response);
    let checkcode = computeCheckCode(Object.keys(payload).sort().map(t => `${t}=${encodeURIComponent(payload[t])}`).join("&"));
    
    return {
        ...payload,
        checkcode
    }
}
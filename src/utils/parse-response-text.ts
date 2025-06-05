import * as cheerio from 'cheerio';

export function parseResponseText(response: string) {

    console.log("[praseResponseText]", response);

    const $ = cheerio.load(response);

    console.log("[parseResponseText] access token", $("#access_token").val());
}
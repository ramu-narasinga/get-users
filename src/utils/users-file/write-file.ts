import { writeFile } from "fs";

export function writeToFile(jsonData: string) {
    writeFile(`${process.cwd()}/data/users.json`, jsonData, 'utf8', (err) => {
        if (err) {
            console.error('Error writing to file', err);
        } else {
            console.log('Data written to file');
        }
    });
}
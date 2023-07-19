

import * as fs from "fs";
import path from "path";

export class UserData {

    getAllUsers(callBack: (respnose : string | undefined) => void): void {

        fs.readFile(path.join(__dirname, "users_response.json"), "utf-8", (err, data) => {
            callBack(data);
        });
    }

    createUser(name: string, ) : string {
        return `Hello, ${name}`;
    }
}
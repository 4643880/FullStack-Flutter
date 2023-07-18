

import * as fs from "fs";
import path from "path";

export class UserData {

    getAllUsers(): string | undefined {
        let userResponse : string;

        fs.readFile(path.join(__dirname, "users_response.json"), "utf-8", (err, data) => {
            userResponse = data;
        });

        return userResponse!;
    }

    createUser(name: string, ) : string {
        return `Hello, ${name}`;
    }
}
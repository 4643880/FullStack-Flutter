import {type} from "os";


interface User {
    name: string,
    uid: string,
    email: string,

    getUserInfo(): string,

    updateUserProfile: () => string,
}

// later adding More Data into same interface

interface User {
    username: string,
    password?: string,
}


// Using inheritance
interface AdminUser extends User {
    accountType: "admin" | "superAdmin" | "user",
}

const adminUser : AdminUser  = {
    name: "hamza",
    uid: "23u3943",
    email: "hamza@gmail.com",
    username: "hamzaisonline",
    password: "1122",
    getUserInfo: () => {
        return "Hello, this is user info";
    },
    updateUserProfile: () => {
        return "update profile";
    },
    accountType: "admin",
}

const alpha: User = {
    name: "ali",
    uid: "23u3943",
    email: "ali@gmail.com",
    username: "aliisonline",
    password: "1122",
    getUserInfo: () => {
        return "Hello, this is user info";
    },
    updateUserProfile: () => {
        return "update profile";
    }
};

console.log(alpha);
console.log(alpha.uid);
console.log(alpha.getUserInfo());
console.log(alpha.updateUserProfile());
console.log("===================================");
console.log(adminUser);
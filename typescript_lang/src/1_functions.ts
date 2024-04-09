import { sign } from "crypto";

console.log("Hello, Full Stack Developer");

let a : number = 5;
let b : number = 15;
let sum : number = a + b;
console.log(sum);


let nameString : string = "Aizaz Haider";
console.log(nameString);


let checkLoggedIn : boolean = true;
console.log(checkLoggedIn);


let names : string[] = ["alpha", "bravo", "charlie"];
console.log(names);


function sayGreetings() : void {
    console.log("Greetings Developers");
}
sayGreetings();



function addTwoNumber(a : number , b : number) : number {
    return a+b;
}
let result : number = addTwoNumber(5,5);
console.log(result);



function sqrt(value: number)  {
    return value * value;
}
var result1 = sqrt(5);
console.log(result1)


let signup = (email: string, password : string, isVerified : boolean) => {
    console.log(`Email: ${email} Password: ${password} isVerified: ${isVerified}`);
}

signup('aizaz@gmail.com', '11223344', true);

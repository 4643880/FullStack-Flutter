console.log("Hello, Full Stack Developer");



let a:number = 5;
let b:number = 15;

let sum:number = a+b;

console.log(sum);

let data : string = "Aizaz";
console.log(data);

let checkIsLoggedIn  = true;
console.log(checkIsLoggedIn);


let names = ["aizaz", "ali", 2];
console.log(names);


function greeting(): void {
    console.log("Hi, Aizaz");
}

greeting();

function getSum(num1:number, num2:number) : number {
    return num1 + num2;
}

var result = getSum(5,10);
console.log(result);


function sqrt(value: number) {
    return value * value;
}

var result1 = sqrt(5);
console.log(result1)


let signUp = (email: string, password: string, isVerified: boolean) => {
    console.log(email,password,isVerified);
}

signUp("aizaz@gmail.com", "123", false);
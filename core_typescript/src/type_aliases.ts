


type User = {
    name : string,
    email: string,
}

function getUserDetails(myUser: User){
    console.log(myUser.name);
    console.log(myUser.email);
}

getUserDetails({name: "Ali",email: "ali@gmail.com"});


type uid = string | number;
type inputtype = string | number | boolean | string[] | number[];


function getUID(inputtype : inputtype) : uid {
    return "abcdef";
}

getUID(123);
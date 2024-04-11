
let user = {
    "name" : "Aizaz",
    "id": 123,
}

function getDataOfUser(obj : {name : String, id: Number}) : void {
    console.log(`${obj.name} ${obj.id}`);
}
getDataOfUser(user);




function getItems(obj : {id : Number}) : boolean {
    if(obj.id == 0){
        return false;
    }else{
        return true;
    }
}
let result = getItems({id: 1})
console.log(result);




function getDetails(id: Number | String | String[]) : void {
    if(typeof id == "number"){
        console.log(id + " is a number");
    }else if(typeof id == "string"){
        console.log(id + " is a string");
    }else{
        console.log(id + " is a array of string");
    }
}
getDetails(["2"]);

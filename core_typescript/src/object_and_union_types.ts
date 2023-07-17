let user = {
    "name": "Aizaz",
    "id": "123"
};

let user1 = {
    "name": "Ali",
    "id": "456"
};


function getData(obj : {name: string, id: string, password?: number}){
    console.log(obj.name, obj.id, obj.password);
}

function getItems(id : string){
    if(id == "1"){
        return true;
    }else{
        return "Item not exist";
    }
}

function getDetails(id : string | number | string[]) {
    if (typeof id == "string") {
        return console.log(id.toUpperCase() + "  "+ typeof id);
    } else if(Array.isArray(id)){
        console.log("array of string  " + typeof id);
    }else {
        console.log(id + "  " + typeof id);
    }
}
getData(user);
getData(user1);
getData({name: "Nasir",id: "789", password: 2498934394});
getDetails(["a", "b"]);

let data1 = getItems("2");
console.log(data1);
var users = [
    {
        id:1,
        name:"sobin",
        username:"sobingt@bb.com",
        password:"abc"
    },
    {
        id:2,
        name:"stanley",
        username:"stan@bb.com",
        password:"xyz"
    },
    {
        id:3,
        name:"shashank",
        username:"shas@leiansis.com",
        password:"pqr"
    }
];

exports.getUsers= function(){
        return users;
}

exports.getUser=function(id){
    for(var i=0; i<users.length;i++){
        if(users[i].id==id) return users[i];
    }
}

exports.check=function(body){
    for(var i=0; i<users.length;i++){
        console.log(users[i]);
        if((users[i].username==body.user) &&(users[i].password==body.pass))  
            //return true;
            return users[i];
    }
    return false;
}
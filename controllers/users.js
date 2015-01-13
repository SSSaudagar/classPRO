var userModel=require('../models/Users');
exports.getUsers= function(){
        return userModel.users;
}

exports.getUser=function(id){
    for(var i=0; i<users.length;i++){
        if(users[i].id==id) return users[i];
    }
}

var check=function(body){
    for(var i=0; i<userModel.users.length;i++){
        console.log(userModel.users[i]);
        if((userModel.users[i].username==body.user) &&(userModel.users[i].password==body.pass))  
            //return true;
            return userModel.users[i];
    }
    return false;
}
exports.postLogin=function(request,response){
    console.log(request.body.user);
    console.log(request.body.pass);
//    console.log(request.body);
    var result=check(request.body); 
    if(result)
   response.send("send data" + result.name);
    else response.send("wrong data" );
}
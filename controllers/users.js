var userModel=require('../models/Users');
exports.getAllUser = function(req,res){
//    var userObject = new userModel();
//    userObject.find(function(err,user){
    userModel.find(function(err,user){
        if(err) res.send(err);
        res.json(user);
    });
}
//exports.saveDumpUser = function(req,res){
//    var userObject = new userModel();
//    userObject.name = "Sobin";
//    userObject.username="sobingt";
//    userObject.id = 1;
//    console.log('user entered');
//    userObject.save();
//    res.send(userObject);
//    //userobject.remove({},func())
//}
exports.createUser= function(req,res){
    res.render('create');
}
exports.postNewUser = function(req,res){
    var user= userModel();
    user.name = req.body.name;
    user.username = req.body.username;
    user.password = req.body.password;
    user.save();
    res.send(req.body.name+" "+req.body.username+" "+req.body.password+" done");
    
}
//exports.saveDumpUser = function(req,res){
//    var userObject = new userModel();
//    userObject.remove({name:"Shashank"},function(){
//        res.send('All Collections removed');
//    });
//}
exports.getUserByID=function(req,res){
    userModel.findById(req.params.id,function(err,user){
        if(err) res.send(err);
        res.render('user',{
            title: "userprofile",
            user: user
        });
    });
}
exports.deleteUser=function(req,res){
    userModel.remove({
        _id: req.params.id
    }, function(err,user){
        if(err) res.send(err);
        res.json({
            message: 'successfully deleted user'
        });
    });
}
exports.deleteUserByName=function(req,res){
    userModel.remove({
        name: req.params.name
    }, function(err,user){
        if(err) res.send(err);
        res.json({
            message: 'successfully deleted user'
        });
    });
}
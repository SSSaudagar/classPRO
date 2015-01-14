var user = require('./users');
exports.index= function(request,response){
    response.render('index',{
        title:"Home",
        author:"Shashank",
        users: user.getUsers(),
    });
//    var path = require('path');
//    response.sendFile(path.join(__dirname, '/views', 'index.html'));
//    //response.sendFile("views/index.html");
}

exports.login=function(request,response){
   response.render('login',{
        title:"Login",
        author:"Shashank",
    });
}
exports.signup = function(request,response){
//    var path = require('path');
//    response.sendFile(path.join(__dirname, '/views', 'signup.html'));
    response.render('signup',{
        title:"Please Sign Up",
        author:"Shashank",
    });
}

exports.about = function(request,response){
//    var path = require('path');
//    response.sendFile(path.join(__dirname, '/views', 'aboutus.html'));
    response.render('aboutus',{
        title:"About Us",
        author:"Shashank",
    });
}
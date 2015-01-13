var express = require('express');
var hbs=require('hbs');
var bodyparser= require('body-parser');
var userController= require('./controllers/users');
var app = express();
var path = require('path');
app.set('views',path.join(__dirname, '/views'));
app.set('view engine','html');
app.engine('html',hbs.__express);
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
app.use(express.static('public'));
//app.get('/', function(request,response){
//    response.render('index',{
//     title:'Home',
//     name:'shashank'
//});
app.get('/', function(request,response){
    response.render('index',{
        title:"Home",
        author:"Shashank",
        users: users.getUsers(),
    });
//    var path = require('path');
//    response.sendFile(path.join(__dirname, '/views', 'index.html'));
//    //response.sendFile("views/index.html");
});

app.get('/user/:id', function(request,response){
    var user= users.getUser(request.params.id);
    response.render('user',{
        title:"Home",
        author:"Shashank",
        user: user
    });
});
//app.get('/login', function(request,response){
//    var path = require('path');
//    response.sendFile(path.join(__dirname, '/views', 'login.html'));
//});
app.get('/login', function(request,response){
   response.render('login',{
        title:"Login",
        author:"Shashank",
    });
});
app.post('/login', userController.postLogin);
app.get('/signup', function(request,response){
//    var path = require('path');
//    response.sendFile(path.join(__dirname, '/views', 'signup.html'));
    response.render('signup',{
        title:"Please Sign Up",
        author:"Shashank",
    });
});
app.get('/about', function(request,response){
//    var path = require('path');
//    response.sendFile(path.join(__dirname, '/views', 'aboutus.html'));
    response.render('aboutus',{
        title:"About Us",
        author:"Shashank",
    });
});
app.listen(3000);
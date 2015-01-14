var express = require('express');
var hbs=require('hbs');
var bodyparser= require('body-parser');
var mongoose = require('mongoose');
var userController= require('./controllers/users');
var homeController= require('./controllers/home');
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

//Mongoose
mongoose.connect('mongodb://localhost:27017/classpro/');
mongoose.connection.on('error',function(){
    console.error('mongodb is not connected. Check if mongod is running')
});
//Routes
app.get('/users', userController.getAllUser);
//app.get('/dump',userController.saveDumpUser);
app.get('/adduser',userController.createUser);
app.post('/adduser',userController.postNewUser);
app.get('/user/:id',userController.getUserByID);
app.get('/user/delete/:id',userController.deleteUser);
app.get('/user/delete/name/:name',userController.deleteUserByName);
//app.get('/', homeController.index);
//app.get('/user/:id',userController.getUserByID);
////app.get('/login', function(request,response){
////    var path = require('path');
////    response.sendFile(path.join(__dirname, '/views', 'login.html'));
////});
//app.get('/login', homeController.login);
//app.post('/login', userController.postLogin);
//app.get('/signup', homeController.signup);
//app.get('/about', homeController.about);
app.listen(3000);
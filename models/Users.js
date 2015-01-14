var mongoose = require('mongoose');
//var bcrypt = require('bcrypt-node.js');
//var crypto = require('crypto');
var userSchema=new mongoose.Schema({
    id:String,
    name:String,
    password:String,
    username: String
});
module.exports= mongoose.model('User',userSchema);
'use strict'

var mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
    userid:String,
    phoneNumber:{
        unique:true,
        type:String
    },
    areaCode:String,
    verifyCode:String,
    accessToken:String,
    nickname:String,
    gender:String,
    breed:String,
    age:String,
    avatar:String,
    meta:{
        createAt:{
            type:Date,
            dafault:Date.now()
        },
        updateAt:{
            type:Date,
            dafault:Date.now()
        },

    }
})
module.exports = mongoose.model('User',UserSchema)
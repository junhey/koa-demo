'use strict'

var Router = require('koa-router')
var User = require('../app/controller/user')
module.exports = function(){
    var router = new Router({
        prefix:'/api'
    })
    router.post('/u/adduser',User.addUser)
    router.post('/u/delete',User.delete)
    router.post('/u/edit',User.edit)
    router.post('/u/getusers',User.findAll)

    router.post('/signatrue',App.signature)
    return router
}
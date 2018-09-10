'use strict'

var fs = require('fs')
var path = require('path')
var mongoose = require('mongoose')

var db = 'mongodb://127.0.0.1:27017'
mongoose.Promise = require('bluebird')
mongoose.connect(db)

var koa = require('koa')
var logger = require('koa-logger')
var router = require('koa-router')
var session = require('koa-session')
var bodyParser = require('koa-bodyparser')

var app = new koa();

app.keys = ['imooc']

app.use(logger())
app.use(session(app))
app.use(bodyParser())

var router = require('./config/router')()
app.use(router.routes())
   .use(router.allowedMethods())

app.listen(1234)
console.log("Listening 1234")
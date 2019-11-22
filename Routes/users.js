const express = require('express')
const usersCtrl= require('../controllers')
const vertifyToken=
require('../auth').vertifyToken


const usersRouter = new express.Router()

usersRouter.route('/').get(usersCtrl.index)

usersRouter.route('/').post(usersCtrl.create)

usersRouter.post('/authenticate',usersCtrl.authenticate)

usersRouter.use(vertifyToken)

usersRouter.route('/:id').get(usersCtrl.show)


usersRouter.route('/:id').patch(usersCtrl.update)

usersRouter.route('/:id').delete(usersCtrl.destroy)


module.exports=usersRouter

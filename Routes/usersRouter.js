const express = require('express')
const usersCtrl= require('../controllers')
const verifyToken=require('../auth').verifyToken
// const Users = require("../models/users")
// const router = new express.Router()
const usersRouter = new express.Router()



// usersRouter.get('/api/users', async (req, res) => {
//     try {
//         let user = await User.find();
//         return res.send(user)
//     }
//     catch (err) {
//         console.log(err)
//     }
// })

usersRouter.route('/').post(usersCtrl.create)

usersRouter.post('/authenticate',usersCtrl.authenticate)

usersRouter.use(verifyToken)

usersRouter.route('/').get(usersCtrl.index)

usersRouter.route('/:id').get(usersCtrl.show)


usersRouter.route('/:id').patch(usersCtrl.update)

usersRouter.route('/:id').delete(usersCtrl.destroy)


module.exports = usersRouter



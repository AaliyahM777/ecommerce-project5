const User = require('../models/users.js')
const signToken =
    require('../auth').signToken


module.exports = {
    //lists all users

    index: (req, res) => {
        User.find({}, (err, users) => {
            res.json(users)

        })
    },

    //get one user
    show: (req, res) => {
        User.findById(req.params.id, (err, user) => {

            res.json(user)
        })
    },


    //create a new user
    create: (req, res) => {
        User.create(req.body, (err, user) => {
            if (err) return
            res.json({ success: false, code: err.code })

            // once user created, generate a JWT and return ti client

            const token = signToken(user)
            res.json({ success: true, message: "User created.Token attached.", token })


        })
    },

    // update and existing user

    update: (req, res) => {
        User.findById(req.params.id, (err, user) => {
            Object.assign(user, req.body)
            user.save((err, updatedUser) => {
                res.json({
                    success: true,
                    message: "User updated.", user
                })

            })
        })


    },

    // delete an exisitng user

    destroy: (req, res) => {
        User.findByIdAndRemove(req.params.id, (err, user) => {
            res.json({
                success: true, message: "User deleted.", user

            })
        })
    },

    // login route

    authenticate: (req, res) => {


        // check if the user exists
        User.findOne({ email: req.body.email },
            (err, user) => {
                // if there's no user or the password is invalid
                if (!user || !user.validPassword(req.body.password)) {
                    //deny access
                    return res.json({
                        success:
                            false, message: "Invalid credentials."
                    })
                }
                const token = signToken(user)
                res.json({ success: true, message: "Token attached.", token })

            })
    }
}







const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')


const userSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
}, {collection: 'users'})


//adds a method to a user document object to create a hashed password

userSchema.methods.generalHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
}

userSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password)
}

userSchema.pre('save', function (next) {
    console.log(`Just triggered `)
    console.log(this.isModified('password'))
    if (this.isModified('password')) {
        this.password = this.generateHash(this.password)
        next()
    } else {
        next()

    }


})


const User = mongoose.model('User', userSchema)
module.exports=User
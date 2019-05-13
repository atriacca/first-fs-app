const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require("bcrypt")

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    joined: {
        type: Date,
        default: Date.now
    }
})
                            // Model Name    // Model Blueprint
userSchema.pre("save", function (next) {
    const user = this
    if (!user.isModified("password")) return next() // telling bcrypt to hash if hasn't already
    bcrypt.hash(user.password, 10, (err, hashed) => {
        if (err) return next(err)
        user.password = hashed
        next()
    })
})

userSchema.methods.checkPassword = function (passwordAttempt, callback) {
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
        if (err) return callback(err)
        callback(null, isMatch)
    })
}

userSchema.methods.withoutPassword = function () {
    const user = this.toObject()
    delete user.password
    return user
}

module.exports = mongoose.model("User", userSchema)
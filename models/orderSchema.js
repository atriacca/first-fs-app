const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("Order", orderSchema)
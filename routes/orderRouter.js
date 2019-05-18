const express = require('express')
const orderRouter = express.Router()
// const Order = require('../models/orderSchema.js')

// Post 
orderRouter.post("/", (req, res, next) => {
    // Add user ID to the Order Object
    req.body.user = req.user._id
    const newOrder = new Order(req.body)
    newOrder.save((err, savedOrder) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedOrder)
    })
})

// Get orders by requesting user
orderRouter.get("/", (req, res, next) => {
    // Find the orders that have .user that === the requesting.user's _id
    Order.find({user: req.user._id}, (err, orders) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(orders)
    })
})

// Delete a Order belonging to logged in user
orderRouter.delete("/:orderId", (req, res, next) => {
    Order.findOneAndRemove(
        // find the order with the req.params._id and make sure it has the same user ._id as the user requesting removal
        {_id: req.params.orderId, user: req.user._id}, 
        (err, deletedOrder) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send({msg: `Order with title ${deletedOrder.title} was deleted`, deletedOrder})
    })
})

module.exports = orderRouter
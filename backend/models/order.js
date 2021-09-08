const mongoose = require('mongoose')
const user = require('./user')
const product = require('./product')

const orderSchema = mongoose.Schema({
   senderInfo : {
        name: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        contact: {
            type: String,
            required: true
        }
    },

    receiverInfo : {
        name: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        nearestTown: {
            type: String,
            required: true
        },
        contact: {
            type: String,
            required: true
        }
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },

    orderItems: [
        {
            name: {
                type: String,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            },
            image: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            product: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Product'
            }
        }
    ],

    deliverDate: {
        type: Date,
        //required: true
    },

    specialNote: {
        type: String,
        required: true
    },

    // Total price of the selected products
    itemsPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    deliveryCharge: {
        type: Number,
        //required: true,
        default: 0.0
    },
    // totalAmmount = itemsPrice + deliveryCharge
    totalAmount: {
        type: Number,
        required: true,
        default: 0.0
    },

    paymentInfo:{
        id: {
            type: String
        },
        status: {
            type: String
        }
    },
    paidAt: {
        type: Date
    },

    orderStatus: {
        type: String,
        required: true,
        default: 'Processing'
    },

    createdAt: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('Order', orderSchema)
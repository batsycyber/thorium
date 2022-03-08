const mongoose = require('mongoose');
const objId = mongoose.Schema.Types.ObjectId;

const orderSchema = new mongoose.Schema({
    userId: objId,
    productId: objId,
    amount: Number,
    isFreeAppUser: Boolean,
    date: String
}

    , { timestamps: true });


module.exports = mongoose.model('AssignmentOrder', orderSchema) 
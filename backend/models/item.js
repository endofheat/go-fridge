const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    itemName: { type: String, required: true, unique: true },
    quantity: { type: Number },
    unit: { type: String, required: true},
    expireDate: { type: Date },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("item", itemSchema);
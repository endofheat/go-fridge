const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    itemName: { type: String, trim: true, required: true, unique: true },
    quantity: { type: Number, },
    email: { type: String, trim: true, required: true, unique: true },
    password: { type: String, trim: true, required: true, unique: true },
    fridgeID: { type: Schema.Types.ObjectId, ref: "fridge" },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("item", itemSchema);
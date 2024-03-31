const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fridgeItemSchema = new Schema({
    itemID: { type: Schema.Types.ObjectId, ref: "item", required: true },
    userID: { type: Schema.Types.ObjectId, ref: "user", required: true },
});

module.exports = mongoose.model("fridgeItem", fridgeItemSchema);
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fridgeItemSchema = new Schema({
    itemID: { type: Schema.Types.ObjectId, ref: "item" },
});

module.exports = mongoose.model("fridgeItem", fridgeItemSchema);
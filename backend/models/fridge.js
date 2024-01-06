const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fridgeSchema = new Schema({
    fridgeItemID: { type: mongoose.Schema.Types.ObjectId, ref: "fridgeItem" },
});

module.exports = mongoose.model("fridge", fridgeSchema);
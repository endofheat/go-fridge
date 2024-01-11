const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemTagSchema = new Schema({
    itemID: { type: Schema.Types.ObjectId, ref: "item" },
    tagID: { type: Schema.Types.ObjectId, ref:"tag"},
});

module.exports = mongoose.model("itemTag", itemTagSchema);
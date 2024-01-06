const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemTagSchema = new Schema({
    itemID: { type: Schema.Types.ObjectId, ref: "item" },
});

module.exports = mongoose.model("itemTag", itemTagSchema);
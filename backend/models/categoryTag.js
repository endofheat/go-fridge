const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categoryTagSchema = new Schema({
    tagName: { type: String, required: true, unique: true },
    userID: { type: Schema.Types.ObjectId, ref: "user" },
    itemTagID: { type: Schema.Types.ObjectId, ref: "itemTag" },
});

module.exports = mongoose.model("categoryTag", categoryTagSchema);
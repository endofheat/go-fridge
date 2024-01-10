const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tagSchema = new Schema({
    tagName: { type: String, required: true, unique: true },
    userID: { type: Schema.Types.ObjectId, ref: "user" },
});

module.exports = mongoose.model("tag", tagSchema);
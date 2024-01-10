const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: { type: String, trim: true, required: true, unique: true },
    email: { type: String, trim: true, required: true, unique: true, lowercase: true },
    password: { type: String, trim: true, required: true, unique: true },
    fridgeName: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("user", userSchema);
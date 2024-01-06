const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shoppingListSchema = new Schema({
    listName: { type: String, trim: true, required: true, unique: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    userID: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    itemID: { type: mongoose.Schema.Types.ObjectId, ref: "item" },
});

module.exports = mongoose.model("shoppingList", shoppingListSchema);
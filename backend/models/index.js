"use strict";
// require models
const Tag = require('./tag');
const FridgeItem = require('./fridgeItem');
const Item = require('./item');
const ItemTag = require('./itemTag');
const ShoppingList = require('./shoppingList');
const User = require('./user');

//sync models
// async function init() {
//     await Tag.sync();
//     await Fridge.sync();
//     await FridgeItem.sync();
//     await Item.sync();
//     await ItemTag.sync();
//     await ShoppingList.sync();
//     await User.sync();
// }
// init();

module.exports = {
    Tag,
    FridgeItem,
    Item,
    ItemTag,
    ShoppingList,
    User,
};
"use strict";
const user = require("./user");
const item = require("./item");

async function init() {
    await user.sync();
}
init();

module.exports = {
    user,
    item,

}
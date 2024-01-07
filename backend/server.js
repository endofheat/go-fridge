const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
require('dotenv').config();
let dbConnect = require('./dbConnect');
let userRoutes = require('./routes/userRoutes');
let categoryTagRoutes = require('./routes/categoryTagRoutes');
let fridgeItemRoutes = require('./routes/fridgeItemRoutes');
let fridgeRoutes = require('./routes/fridgeRoutes');
let itemRoutes = require('./routes/itemRoutes');
let itemTagRoutes = require('./routes/itemTagRoutes');
let shoppingListRoutes = require('./routes/shoppingListRoutes');

// parse requests of content-type - application / json;
app.use(express.json());
app.use(cors())

// set prefix for routes
app.use('/api/user', userRoutes)
app.use('/api/tag', categoryTagRoutes)
app.use('/api/fridgeitem', fridgeItemRoutes)
app.use('/api/fridge', fridgeRoutes)
app.use('/api/item', itemRoutes)
app.use('/api/itemtag', itemTagRoutes)
app.use('/api/shoppinglist', shoppingListRoutes)

// set port, listen for requests
const PORT = process.env.PORT || 8888;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
  console.log('Welcome to go-fridge.');
});

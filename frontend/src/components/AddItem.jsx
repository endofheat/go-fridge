import React from 'react'
import {useState } from 'react'
import axios from 'axios'
import { Button, TextField } from '@mui/material'

export default function AddItem({onAddItem}) {
    const [itemName, setItemName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [unit, setUnit] = useState('');
    const [expireDate, setExpireDate] = useState('');
    const setTheQuery = async() => {
        const newItem = {itemName:itemName, quantity:quantity, unit:unit, expireDate:expireDate }
        const item = await axios.post (`http://localhost:8888/api/item/create`, newItem)
        console.log(item.data.data._id)
        const newItemTag = {itemID:item.data.data._id, tagID:tagID }
        const itemTag = await axios.post (`http://localhost:8888/api/itemTag/create`, newItemTag)
        };
  return (
    <div>
    <Button
    id="searchButton"
    size="small"
    onClick={() => setTheQuery()}
    sx={{ "&&:focus": { outline: "none" } }}
    >
    Add item
    </Button>
    <TextField
    InputLabelProps={{
        style: { color: "#4a848e", borderColor: "#4a848e" },
    }}
    label="item name"
    variant="filled"
    type="text"
    value={itemName}
    onChange={(e) => setItemName(e.target.value)}
    />
    <TextField
    InputLabelProps={{
        style: { color: "#4a848e", borderColor: "#4a848e" },
    }}
    label="quantity"
    variant="filled"
    type="text"
    value={quantity}
    onChange={(e) => setQuantity(e.target.value)}
    />

<TextField
    InputLabelProps={{
        style: { color: "#4a848e", borderColor: "#4a848e" },
    }}
    label="unit"
    variant="filled"
    type="text"
    value={unit}
    onChange={(e) => setUnit(e.target.value)}
    />

<TextField
    InputLabelProps={{
        style: { color: "#4a848e", borderColor: "#4a848e" },
    }}
    label="expire date in YYYY-MM-DD format"
    variant="filled"
    type="text"
    value={expireDate}
    onChange={(e) => setExpireDate(e.target.value)}
/>


    </div>
  )
}

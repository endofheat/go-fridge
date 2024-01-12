import React, { useEffect, useState } from 'react'
import CustomCard from '../components/CustomerCard'
import { useSearchContext } from '../context/SearchContext'
import axios from 'axios'

export default function SearchResultPage() {
    const {currentResult} = useSearchContext();
    const [items, setItem] = useState([]);
    useEffect(() => {
        console.log(currentResult)
        if (currentResult == '') {
        axios.get(`http://localhost:8888/api/itemtag/`)
        .then(response => {
            setItem(response.data.data)
        })}else {
            axios.get(`http://localhost:8888/api/itemtag/${currentResult}`)
            .then(response => {
                setItem(response.data.data)
        })
        }
    },[currentResult])

    return (
        <div>Item in my fridge
            {Array.isArray(items) ? items.map ((item, index) => {
                // {console.log(item.itemID._id)}
                return item.itemID.itemName ? <CustomCard key={index} itemID={item.itemID._id} title={item.itemID.itemName} tagID={item._id} buttonText="delete" /> : null
            }): null}
            
        </div>
    )
}

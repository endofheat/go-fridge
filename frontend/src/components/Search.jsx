import React from "react";
import { useState, useEffect, useContext } from "react";
import { TextField, Button } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
// import Axios from "./axios/Axios";
import axios from 'axios';
import { useSearchContext } from "../context/SearchContext";

export default function Search(props) {
    let [textField, setTextField] = useState("");
    const {setCurrentResult} = useSearchContext();
    //if the textfield is empty and button is pushed, reloads the screen. if not, sets the query with input.
    const setTheQuery = async() => {
    const response = await axios.get (`http://localhost:8888/api/tag/${textField}`)
        const tagID = response.data.data._id
        console.log(tagID)
        // const itemTag = await axios.get (`http://localhost:8888/api/itemTag/${tagID}`)
        // console.log(itemTag.data.data)
        setCurrentResult(tagID)
    };
    return (
    <div>
        <Button
        id="searchButton"
        size="small"
        onClick={() => setTheQuery()}
        sx={{ "&&:focus": { outline: "none" } }}
        >
        <SearchIcon sx={{ mr: 2 }} />
        </Button>
        <TextField
        InputLabelProps={{
            style: { color: "#4a848e", borderColor: "#4a848e" },
        }}
        label="search"
        variant="filled"
        type="text"
        value={textField}
        onChange={(e) => setTextField(e.target.value)}
        />
    </div>
    );
}

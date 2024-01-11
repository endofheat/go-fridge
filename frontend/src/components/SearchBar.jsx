// SearchBar.js

import React, { useState } from 'react';
import { InputBase, IconButton, AppBar, Toolbar, Icon, Box } from '@mui/material';
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ onSearch }) => {
const [searchTerm, setSearchTerm] = useState('');

const handleSearch = async(e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const search = data.get("search")
    console.log(search);
    try {
        // use RESTful API and the endpoint from backend
        const response = await fetch(`http://localhost:8888/api/tag/${searchTerm}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }    
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
            }
        
            const searchResult = await response.json();
            console.log(searchResult);
            onSearch(searchResult);
            
            } catch (error) {
            console.error('Error during search:', error);
            }
    }

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
    },
    }));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
    width: "20ch",
    },
},
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));


return (
    <div>
        <Box onSubmit={handleSearch} component="form">
    <Search>
            <IconButton type="submit" onClick={handleSearch}><SearchIcon/></IconButton>
    <StyledInputBase
        placeholder="Search tag..."
        inputProps={{ "aria-label": "search" }}
        // value={searchTerm}
        // onChange={(e) => setSearchTerm(e.target.value)}
        name='search'
    />
    </Search>
    </Box>
    </div>
);
};

export default SearchBar;

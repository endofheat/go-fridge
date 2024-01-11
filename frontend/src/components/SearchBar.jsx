// SearchBar.js

import React, { useState } from 'react';
import { InputBase, IconButton, AppBar, Toolbar } from '@mui/material';
import { styled} from "@mui/material/styles";
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ onSearch }) => {
const [searchTerm, setSearchTerm] = useState('');

const handleSearch = async() => {
    try {
        // use RESTful API and the endpoint from backend
        const response = await fetch(`/api/tag/${searchTerm}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }    
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
            }
        
            const searchResult = await response.json();
        
            onSearch(searchResult);
            } catch (error) {
            console.error('Error during search:', error);
            }
    }


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
    <IconButton onClick={handleSearch}>
        <SearchIcon />
    </IconButton>
    <SearchBar>
        <SearchIconWrapper>
            <SearchIcon />
        </SearchIconWrapper>
    <StyledInputBase
        placeholder="Search tag..."
        inputProps={{ "aria-label": "search tag" }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
    />
    </SearchBar>
    </div>
);
};

export default SearchBar;

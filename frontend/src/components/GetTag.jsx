import React, { useEffect, useState } from 'react';
import { TextField, Autocomplete } from '@mui/material';
import axios from 'axios';

export default function GetTag(props) {
  const [userId, setUserId] = useState(null);
  const [tagID, setTagID] = useState(0);
  const [user, setUser] = useState(null);
  useEffect(() => {
    axios.get(`http://localhost:8888/api/tag`)
    .then(response => setTagID(response.data.data))
  })

  const userOptions = tagID.map((user) => ({
    label: user.id.toString(), // Convert the ID to a string
    value: user.id, // Keep the ID as a number
  }));
  const userObj = tagID.find(user => user.id === userId);
  return (
    <>
    <div>{user?userObj.name:"Add a transaction"}</div>
    <br/>
    <Autocomplete
        disablePortal
        id="User ID"
        onChange={(e, selectedOption) => {
          setUserId(selectedOption ? selectedOption.value : null);
          setCount(count + 1);
        }}
        options={userOptions}
        getOptionLabel={(option) => option.label}
        sx={{ width: 195, margin: '0 auto', textAlign: 'center' }}
        renderInput={(params) => <TextField {...params} sx={{ textAlign: 'center' }}  label="User ID" />}
      /><br/>
    </>
  );
}
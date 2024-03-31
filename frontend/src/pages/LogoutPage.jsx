import React from 'react';
import { useUserContext } from '../context/UserContext';
import { Navigate, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

function LogoutPage() {
const { handleUpdateUser } = useUserContext();
const navigate = useNavigate();

const handleLogout = () => {
    handleUpdateUser({}); 

    navigate('/login');
};

return (
    <div>
    <h1>Logout Page</h1>
    <p>Are you sure you want to log out?</p>
    <Button onClick={handleLogout}>Logout</Button>
    </div>
);
}

export default LogoutPage;
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Navigate, useNavigate } from 'react-router-dom';
import { useUserContext } from "../context/UserContext";

export default function Profile() {
const { handleUpdateUser } = useUserContext();
const navigate = useNavigate();

const handleLogout = () => {
    handleUpdateUser({}); 

    navigate('/login');
};

return (
    <div className="Profile">
    <h1>Profile</h1>
    <h2>Welcome back. </h2>
    <p>Wanna go to <Link to="/dashboard">dashboard</Link>? </p>

    <Button onClick={handleLogout}>Log Out</Button>
    </div>
);
}
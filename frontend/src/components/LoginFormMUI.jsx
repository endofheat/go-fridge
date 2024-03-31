import { useState } from "react";
import { useUserContext } from "../context/UserContext";
import { TextField, Button } from "@mui/material";
import { darkTheme } from "../themes/darkTheme";

function LoginForm() {
// TextField state values always need to be strings - empty initially
const [userEmail, setUserEmail] = useState("");
const [userPassword, setUserPassword] = useState("");
const [userName, setUserName] = useState("");

// new state value for showing submission messages to user
const [submitResult, setSubmitResult] = useState('');

// tracks number of login attempts and boolean if login successful
const [loginAttempts, setLoginAttempts] = useState(0);
const { currentUser, handleUpdateUser } = useUserContext();

const loginOK = currentUser.email; // if there is an email associated with the current user, we know the login worked

const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reloading on form submit
    
    // add some password validation
    if (userPassword.length < 5) {
    setSubmitResult("Password must be at least 5 characters long");
    setLoginAttempts(loginAttempts + 1)
    } else if (!userEmail.includes("@")) {
        setSubmitResult("Invalid email address");      
        setLoginAttempts(loginAttempts + 1)
    } else if (userPassword === userEmail) {
    setSubmitResult("Password must not match email address");
    setLoginAttempts(loginAttempts + 1)
    } else {
    setSubmitResult("Successful login.");
    handleUpdateUser({name: userName, email: userEmail, password: userPassword}); // set current user object based on successful login form details
    }
};  

// conditional return - displays different markup from the component if the condition is true
if (loginAttempts >= 5) return <p>Go away hackers, attempts exceeded</p>;
if (loginOK) return (
    <><p>{submitResult}</p><Button onClick={() => handleUpdateUser({})}>Log Out</Button></> // reset the current user back to an empty object
);

return (
    <div className="LoginForm componentBox"  style={{background:darkTheme.Background, color:darkTheme.Background}}>
    <form onSubmit={handleSubmit}>
    <br />
    <div className="formRow">
            
            <TextField label="Name"
                type="text"
                value={userName}
                name="userName"
                onChange={(e) => setUserName(e.target.value)}
            />

        </div>      
        <br />  
        <div className="formRow">
            {/* Controlled form element needs both value and onChange.
        onChange handler uses event param e to access target value.
        Whenever user types, new value is stored in state. */}
            <TextField label="Email Address:"
                type="email"
                value={userEmail}
                name="userEmail"
                onChange={(e) => { console.log(e.target.value); setUserEmail(e.target.value); }}
            />
        </div>
        <br />
        <div className="formRow">
            
            <TextField label="Password:"
                type="password"
                value={userPassword}
                name="password"
                onChange={(e) => setUserPassword(e.target.value)}
            />

        </div>
        <br />
        <Button onClick={handleSubmit}>Log In</Button>
        <p>{submitResult}</p>        
    </form> 
    </div>
);
}

// try removing the onChange prop and typing in a field
export default LoginForm;
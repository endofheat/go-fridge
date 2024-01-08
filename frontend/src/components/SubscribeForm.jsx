import { useState } from "react";
import { useFormInput } from "../hooks/useFormInput";

export default function SubscribeForm() {

const [status, setStatus] = useState("");

// similar state variables mapped to form inputs
const [firstNameProps, resetFName] = useFormInput("Given name...");
const [lastNameProps, resetLName] = useFormInput("Family name...");
const [emailProps, resetEmail] = useFormInput("example@example.com");

function handleSignup() {
    resetFName(); resetLName();
    resetEmail();
    setStatus("Thanks for sign up!");
}

return (
    <div className="SubscribeForm componentBox">
    <label>
        First name: {/* form inputs with similar props */}
        <input {...firstNameProps}/>
    </label>
    <label>
        Last name: {/* form inputs with similar props */}
        <input {...lastNameProps}/>
    </label>      
    <label>
        Email: {/* form inputs with similar props */}
        <input {...emailProps} />
    </label>
    <button onClick={handleSignup}>Sign up</button>
    <div>{status}</div>
    </div>
);
}
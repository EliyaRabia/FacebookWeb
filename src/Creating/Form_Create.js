import { useNavigate } from "react-router-dom";
import React, { useState , useRef } from "react";
import "./Form_Create.css"
function Form_Create() {
    const navigate = useNavigate();
    const usernameBox = useRef(null);
    const passwordBox = useRef(null);
    const passwordCheckBox = useRef(null);
    const displayName = useRef(null);
    const photo = useRef(null);

    const handleSignUp = () => {
        navigate("/");
        console.log(usernameBox.current.value)
        };
    return(
        <div>
            <div>
                <h1>
                    Sign Up
                </h1>
                it's quick and easy
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Username</label>
                <input type="text"
                className="form-control"
                placeholder="email or phone number"
                aria-label="Username"
                aria-describedby="addon-wrapping"
                ref={usernameBox}>
                </input>
            </div>
            <div>
                <button type="button" className="button-container" onClick={handleSignUp}>Sign Up</button>
            </div>
            <div>
                <button type="button" className="button-container" onClick={handleSignUp}>Go Back</button>
            </div>
        </div>
    );
}

export default Form_Create
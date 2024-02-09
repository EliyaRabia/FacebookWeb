import { useNavigate } from "react-router-dom";
import React, { useState , useRef } from "react";
import "./Form_Create.css"
function Form_Create({userList,setuserList}) {

    const [passwordMessage, setPasswordMessage] = useState("");
    const navigate = useNavigate();
    const usernameBox = useRef("");
    const passwordBox = useRef("");
    const passwordCheckBox = useRef("");
    const displayName = useRef("");
    const photo = useRef("");
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordCheck, setShowPasswordCheck] = useState(false);
    const handleTogglePassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };
    const handleTogglePasswordCheck = () => {
        setShowPasswordCheck((prevShowPassword) => !prevShowPassword);
    };
    const handlePasswordClick = () => {
        setPasswordMessage(
            passwordBox.current.value.length > 0
            ? ""
            : "At least 8 digits long, a combination of characters and letters and capital letters."
        );
    };
    const handlePasswordBlur = () => {
        setPasswordMessage("");
    };
    /*
    check the validation of the password
    */
    const validatePassword = (password) => {
        // Check if the password has a length of 8 or more characters
        const hasMinLength = password.length >= 8;
        // Regular expressions to check for capital letter and special character
        const hasCapitalLetter = /[A-Z]/.test(password);
        // Include a broader range of special characters
        const hasSpecialCharacter = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password);
        // Password is valid if it has a capital letter and a special character
        return hasMinLength && hasCapitalLetter && hasSpecialCharacter;
    };
    const goBack = () => {
        navigate("/");
        };
    const createUser = () =>{
        const isUsernameExists = userList.some(
            (user) => user.username === usernameBox.current.value
        );
        //console.log(usernameBox.current.value);
        //console.log(passwordBox.current.value);
        //console.log(passwordCheckBox.current.value);
        //console.log(validatePassword(passwordBox.current.value))
        if(usernameBox.current.value != "" && passwordBox.current.value !="" && passwordCheckBox.current.value !="" && displayName.current.value !="" && photo.current.value !=""){
            if(isUsernameExists == false){
                if(validatePassword(passwordBox.current.value) == true){
                    if(passwordBox.current.value == passwordCheckBox.current.value){
                        const newUser = { username: usernameBox.current.value ,
                            password: passwordBox.current.value ,
                            displayName: displayName.current.value,
                            photo: photo.current.files[0]};
                        const updatedUserList = [...userList, newUser];
                        setuserList(updatedUserList);
                        alert("user created!");
                        navigate("/");
                    }
                    else{
                        alert("password dont match!")
                    }
                }
                else{
                    alert("write valid password")
                }
            }
            else{
                alert("username already exists")
            }
        }
        else{
            alert("need to fill all the information")
        }
    };
    console.log(userList);
    return(
        <div>
            <div>
                <h1>
                    Sign Up
                </h1>
                it's quick and easy
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Username</label>
                <input
                type="text"
                className="form-control"
                placeholder="email or phone number"
                aria-label="Username"
                aria-describedby="addon-wrapping"
                ref={usernameBox}>
                </input>
            </div>
            <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
            <div className="input-group flex-nowrap p-2" >
                <button type="button" className="btn btn-light">
                <i
                    className="bi bi-eye-slash"
                    onMouseOver={handleTogglePassword}
                    onMouseLeave={handleTogglePassword}
                    data-testid="eye-slash-icon"
                ></i>
                </button>
                <input
                type={showPassword ? 'text' : 'password'}
                className="form-control"
                placeholder="enter password"
                aria-label="Password"
                aria-describedby="addon-wrapping"
                ref={passwordBox}
                onClick={handlePasswordClick}
                onBlur={handlePasswordBlur}>
                </input>
            </div>
            {passwordMessage && <div className="message">{passwordMessage}</div>}
            <label htmlFor="exampleFormControlInput1" className="form-label">Confirm Password</label>
            <div className="input-group flex-nowrap p-2">
                <button type="button" className="btn btn-light">
                <i
                    className="bi bi-eye-slash"
                    onMouseOver={handleTogglePasswordCheck}
                    onMouseLeave={handleTogglePasswordCheck}
                    data-testid="eye-slash-icon"
                ></i>
                </button>
                <input
                type={showPasswordCheck ? 'text' : 'password'}
                className="form-control"
                placeholder="confirm password"
                aria-label="Password"
                aria-describedby="addon-wrapping"
                onClick={handlePasswordClick}
                ref={passwordCheckBox}
                onBlur={handlePasswordBlur}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="formFile" className="form-label">Choose pic</label>
                <input className="form-control" type="file" id="image" accept="image/*" ref={photo} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Display Name</label>
                <input
                type="text"
                className="form-control"
                placeholder="enter display name"
                aria-label="Username"
                aria-describedby="addon-wrapping"
                ref={displayName}>
                </input>
            </div>
            <div>
                <button type="button" className="button-container creatingButton" onClick={createUser}>Sign Up</button>
            </div>
            <div>
                <button type="button" className="button-container creatingButton" onClick={goBack}>Go Back</button>
            </div>
        </div>
    );
}

export default Form_Create
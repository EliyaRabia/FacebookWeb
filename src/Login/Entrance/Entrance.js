import React, { useState } from "react";
import { useRef } from "react";
import SignInButton from "../SignInButton/SignInButton";
import SignUpButton from "../SignUpButton/SignUpButton";
import "./Entrance.css";
import { useNavigate } from "react-router-dom";

function Entrance({ setUserExists , userList , setUserLoggedIn}) {
  const [passwordMessage, setPasswordMessage] = useState("");

  const usernameBox = useRef(null);
  const passwordBox = useRef(null);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);


  const handlePasswordClick = () => {
    setPasswordMessage(
      "At least 8 digits long, a combination of characters and letters and capital letters."
    );
  };


  const handlePasswordBlur = () => {
    setPasswordMessage("");
  };


  const handleSignIn = () => {
    const isAuthenticated = userList.find(
      (user) => user.username === usernameBox.current.value &&
      user.password === passwordBox.current.value
    );

    if (isAuthenticated) {
      setUserExists(true);
      const user = {
        username: isAuthenticated.username,
        displayName: isAuthenticated.displayName,
        photo: isAuthenticated.photo
      };
      console.log(user);
      setUserLoggedIn(user);
      navigate("/pid");
    } else {
      alert("Invalid username or password");
    }
  };

  const handleSignUp = () => {
    // Pass userList and setuserList to the Creating component
    navigate("/Creating");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="entrance">
      <div className="input-group flex-nowrap p-2">
        <input
          type="text"
          className="form-control"
          placeholder="email or phone number"
          aria-label="Username"
          aria-describedby="addon-wrapping"
          ref={usernameBox}
        />
      </div>
      <div className="input-group flex-nowrap p-2">
        <button type="button" className="btn btn-light">
          <i
            className="bi bi-eye-slash"
            onMouseOver={togglePasswordVisibility}
            onMouseLeave={togglePasswordVisibility}
            data-testid="eye-slash-icon"
          ></i>
        </button>
        <input
          type={showPassword ? "text" : "password"}
          className="form-control"
          placeholder="password"
          aria-label="Password"
          aria-describedby="addon-wrapping"
          ref={passwordBox}
          onClick={handlePasswordClick}
          onBlur={handlePasswordBlur}
        />
      </div>
      {passwordMessage && <div className="message">{passwordMessage}</div>}

      <SignInButton onClick={handleSignIn} />
      <hr className="hrSize" />
      <SignUpButton onClick={handleSignUp}></SignUpButton>
    </div>
  );
}

export default Entrance;

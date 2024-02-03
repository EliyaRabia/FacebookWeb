import React, { useState } from "react";
import { useRef } from "react";
import SignInButton from "../SignInButton/SignInButton";
import SignUpButton from "../SignUpButton/SignUpButton";
import "./Entrance.css";
import { useNavigate } from "react-router-dom";

function Entrance({ setUserExists }) {
  const [passwordMessage, setPasswordMessage] = useState("");
  const [userList] = useState([
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" },
  ]);

  const usernameBox = useRef(null);
  const passwordBox = useRef(null);
  const navigate = useNavigate();

  const handlePasswordClick = () => {
    setPasswordMessage(
      passwordBox.current.value.length > 0
        ? ""
        : "At least 8 digits long, a combination of characters and letters"
    );
  };


  const handlePasswordBlur = () => {
    setPasswordMessage("");
  };


  const handleSignIn = () => {
    const isAuthenticated = userList.some(
      (user) => user.username === usernameBox.current.value &&
      user.password === passwordBox.current.value
    );

    if (isAuthenticated) {
      setUserExists(true);
      navigate("/pid");
    } else {
      alert("Invalid username or password");
    }
  };

  const handleSignUp = () => {
    navigate("/Creating");
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
        <input
          type="password"
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

import React, { useState } from "react";
import SignInButton from "../SignInButton/SignInButton";
import SignUpButton from "../SignUpButton/SignUpButton";
import "./Entrance.css";

function Entrance() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [userList] = useState([
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" },
  ]);

  const handlePasswordClick = () => {
    // Set the message based on the password input when the input is clicked
    setPasswordMessage(
      password.length > 0
        ? ""
        : "At least 8 digits long, a combination of characters and letters"
    );
  };

  const handlePasswordBlur = () => {
    // Clear the message when the user clicks outside the password input
    setPasswordMessage("");
  };

  const handlePasswordChange = (event) => {
    const inputValue = event.target.value;
    setPassword(inputValue);
  };

   const handleUsernameChange = (event) => {
     const inputValue = event.target.value;
     setUsername(inputValue);
   };

  const handleSignIn = () => {
    // Check if the entered username and password match any user in the user list
    const userExists = userList.some(
      (user) => user.username === username && user.password === password
    );

    if (userExists) {
      console.log("Yes");
    } else {
      console.log("Invalid username or password");
    }
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
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div className="input-group flex-nowrap p-2">
        <input
          type="password"
          className="form-control"
          placeholder="password"
          aria-label="Password"
          aria-describedby="addon-wrapping"
          value={password}
          onChange={handlePasswordChange}
          onClick={handlePasswordClick}
          onBlur={handlePasswordBlur}
        />
      </div>
      {passwordMessage && <div className="message">{passwordMessage}</div>}

      <SignInButton onClick={handleSignIn} />
      <hr className="hrSize" />
      <SignUpButton />
    </div>
  );
}

export default Entrance;

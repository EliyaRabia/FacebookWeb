import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./Login/LoginPage";
import Pid from "./Pid/Pid";
import Creating from "./Creating/Creating"; 
import Posts from "./data/db.json"

export default function Main() {
  /*
  get all the posts from the db.json file
  and set userlist to an empty arr, and userExists to false
  and also set userLoggedIn to false
  */

  const [postList,setPostList] = useState(Posts);
  const [userExists, setUserExists] = useState(false);
  const [id,setId]=useState(11);
  const [userList,setuserList] = useState([
  ]);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  return (
    /*
    use the BrowserRouter to wrap the Routes
    */
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <LoginPage
              userExists={userExists}
              userList={userList}
              setUserExists={setUserExists}
              setUserLoggedIn={setUserLoggedIn}
            ></LoginPage>
          }
        ></Route>
        <Route
          path="/pid"
          element={userExists ? <Pid
            setUserLoggedIn={setUserLoggedIn}
            userLoggedIn={userLoggedIn}
            postList={postList}
            setPostList={setPostList}
            id={id}
            setId={setId}
          ></Pid> : <Navigate to="/"></Navigate>} // if userExists is false, then navigate to the login page
        ></Route>

        <Route
          path="/creating"
          element=
            {<Creating
                userList={userList}
                setuserList={setuserList}
                >
            </Creating>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

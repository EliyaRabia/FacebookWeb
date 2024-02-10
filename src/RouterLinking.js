import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./Login/LoginPage";
import Pid from "./Pid/Pid";
import Creating from "./Creating/Creating"; 
import Posts from "./data/db.json"
export default function Main() {
  const [postList,setPostList] = useState(Posts);
  const [userExists, setUserExists] = useState(false);
  const [userList,setuserList] = useState([
  ]);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  return (
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
          ></Pid> : <Navigate to="/"></Navigate>}
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

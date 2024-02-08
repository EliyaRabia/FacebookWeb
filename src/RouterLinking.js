// Main.js
import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./Login/LoginPage";
import Pid from "./Pid/Pid";
import Creating from "./Creating/Creating"; 
import Pidtest from "./Pidtest/Pidtest";

export default function Main() {
  const [userExists, setUserExists] = useState(false);
  const [userList,setuserList] = useState([
  ]);
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
            ></LoginPage>
          }
        ></Route>
        <Route
          path="/pid"
          element={userExists ? <Pid></Pid> : <Navigate to="/"></Navigate>}
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
        <Route
          path="/pidtest"
          element={<Pidtest></Pidtest>}
        ></Route>
        
      </Routes>
    </BrowserRouter>
  );
}

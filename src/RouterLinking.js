// Main.js
import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./Login/LoginPage";
import Pid from "./Pid/Pid";
import Creating from "./Creating/Creating";

export default function Main(props) {
  const [userExists, setUserExists] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <LoginPage
              userExists={userExists}
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
          element={<Creating></Creating>}
        ></Route>
        
      </Routes>
    </BrowserRouter>
  );
}

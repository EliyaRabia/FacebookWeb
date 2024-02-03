import React from 'react';
import "./LoginPage.css";
import Introduction from './Introduction/Introduction';
import Entrance from './Entrance/Entrance';

function LoginPage({ setUserExists }) {
  return (
    <div className="container px-4 text-center">
      <div className="col-4">
        <Entrance setUserExists={setUserExists}></Entrance>
      </div>

      <div className="col-6">
        <Introduction></Introduction>
      </div>
    </div>
  );
}

export default LoginPage;

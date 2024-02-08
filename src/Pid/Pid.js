import { useNavigate } from "react-router-dom";
import React, { useState , useRef } from "react";
function Pid() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };
  return (
    <div>
      <button type="button" className="button-container" onClick={goBack}>Go Back</button>
    </div>
  );
}

export default Pid;

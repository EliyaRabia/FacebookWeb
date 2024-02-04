import { useNavigate } from "react-router-dom";
import React, { useState , useRef } from "react";
import "./Creating.css"
import FormCreate from "./Form_Create"

import Introduction from '../Login/Introduction/Introduction';

function Creating() {
  console.log("Creating component is rendering");
  return (
    <div className="container px-4 text-center">
      <div className="col-4">
          <FormCreate></FormCreate>
      </div>
      <div className="col-6">
          <Introduction></Introduction>
      </div>
    </div>
  );
}

export default Creating;

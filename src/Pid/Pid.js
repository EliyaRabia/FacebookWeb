import Post from "./Post/Post";
import Posts from "../data/db.json"

import { useNavigate } from "react-router-dom";
import React, { useState , useRef } from "react";
function Pid() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };

  const [postList,setPostList] = useState(Posts); 
  return (
    <div>
    {postList.map((post) =>
      <Post {...post}></Post>
    )}
      
      <button type="button" className="button-container" onClick={goBack}>Go Back</button>
    </div>
  );
}

export default Pid;

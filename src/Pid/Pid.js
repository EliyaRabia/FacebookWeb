import Post from "./Post/Post";
import Posts from "../data/db.json"
import AddPost from "./AddPost/AddPost"

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
      <div>
        <AddPost setPosts={setPostList} posts={postList}></AddPost>
      </div>
      <div>
        {postList.map((post) => (
          <Post {...post}></Post>
        ))}

        <button type="button" className="button-container" onClick={goBack}>
          Go Back
        </button>
      </div>
    </div>
  );
}

export default Pid;

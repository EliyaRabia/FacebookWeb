import Post from "./Post/Post";
import Posts from "../data/db.json"
import AddPost from "./AddPost/AddPost"

import { useNavigate } from "react-router-dom";
import React, { useState , useRef } from "react";
function Pid({ setUserLoggedIn, userLoggedIn}) {
  const navigate = useNavigate();
  const goBack = () => {
    setUserLoggedIn(false);
    navigate("/");
  };
  const [postList,setPostList] = useState(Posts); 
  return (
    <div>
      hey {userLoggedIn.username}
      <button type="button" className="button-container" onClick={goBack}>Log out</button>
      <div>
        <AddPost setPosts={setPostList} posts={postList}></AddPost>
      </div>
      <div>
        {postList.map((post) => (
          <Post {...post}></Post>
        ))}
      </div>
    </div>
  );
}

export default Pid;

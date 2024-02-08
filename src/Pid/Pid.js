import "./Pid.css" 
import Post from "./Post/Post";
import Posts from "../data/db.json"
import AddPost from "./AddPost/AddPost"
import NaviBar from './NaviBar/NaviBar';
import LeftSide from './LeftSide/LeftSide';

import { useNavigate } from "react-router-dom";
import React, { useState , useRef } from "react";
function Pid({ setUserLoggedIn, userLoggedIn}) { 
  const [postList,setPostList] = useState(Posts); 
  return (
    <div className="container-fluid">
      <NaviBar userLoggedIn = {userLoggedIn} setUserLoggedIn={setUserLoggedIn}></NaviBar>
      <div className="row">
        <div className="col-3 bg-light vh-100">
          <LeftSide></LeftSide>
        </div>
        <div className="col">
          <div>
            <div>
              <AddPost setPosts={setPostList} posts={postList}></AddPost>
            </div>
            <div>
              {postList.map((post) => (
                <Post key={post.id}{...post}></Post>
              ))}
            </div>
          </div>
        </div>
        <div className="col-3 bg-light vh-100">
        </div>
      </div>
    </div>
  );
}

export default Pid;

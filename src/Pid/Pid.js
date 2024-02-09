import "./Pid.css" 
import Post from "./Post/Post";
import Posts from "../data/db.json"
import AddPost from "./AddPost/AddPost"
import NaviBar from './NaviBar/NaviBar';
import LeftSide from './LeftSide/LeftSide';
import RightSide from "./RightSide/RightSide";

import { useNavigate } from "react-router-dom";
import React, { useState , useRef } from "react";
function Pid({ setUserLoggedIn, userLoggedIn}) { 
  const [postList,setPostList] = useState(Posts); 
  return (
    <div className="container-fluid">
      <div className="navbar-fixed">
        <NaviBar
          userLoggedIn={userLoggedIn}
          setUserLoggedIn={setUserLoggedIn}
        ></NaviBar>
      </div>
      <div className="row">
        <div className="col-3 bg-light vh-100 leftSideCol">
          <LeftSide></LeftSide>
        </div>
        <div className="col pidCol">
          <div>
            <div>
              <AddPost setPosts={setPostList} posts={postList}></AddPost>
            </div>
            <div>
              {postList.map((post) => (
                <Post
                  key={post.id}
                  {...post}
                  userLoggedIn={userLoggedIn}
                ></Post>
              ))}
            </div>
          </div>
        </div>
        <div className="col-3 bg-light vh-100 rightSideCol">
          <RightSide></RightSide>
        </div>
      </div>
    </div>
  );
}

export default Pid;

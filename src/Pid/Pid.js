import "./Pid.css" 
import Post from "./Post/Post";
import Posts from "../data/db.json"
import AddPost from "./AddPost/AddPost"
import NaviBar from './NaviBar/NaviBar';
import LeftSide from './LeftSide/LeftSide';

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
    <div class="container-fluid">
      <NaviBar {...userLoggedIn.username}></NaviBar>
      <div class="row">
        <div class="col-3 bg-light vh-100">
          <LeftSide></LeftSide>
        </div>

        <div class="col">
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

        </div>
        <div class="col-3 bg-light vh-100">


        </div>
      </div>
    </div>

        
  );
}

export default Pid;

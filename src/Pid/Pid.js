import "./Pid.css" 
import Post from "./Post/Post";
import AddPost from "./AddPost/AddPost"
import NaviBar from './NaviBar/NaviBar';
import LeftSide from './LeftSide/LeftSide';
import RightSide from "./RightSide/RightSide";
import React, { useState , useRef } from "react";
function Pid({ setUserLoggedIn, userLoggedIn,postList,setPostList}) { 
  const handleDeletePost = (postId) => {
    const updatedPosts = postList.filter((post) => post.id !== postId);
    setPostList(updatedPosts);
  };
  const handleDeletePicture = (postId) => {
    const updatedPostList = postList.map((post) => {
      if (post.id === postId) {
        return { ...post, pictures: "" };
      } else {
        return post;
      }
    });
    setPostList(updatedPostList);
  };
  const handleAddPicture = (postId,photo) => {
    const updatedPostList = postList.map((post) => {  
      if (post.id === postId) {
        return { ...post, pictures: photo };
      } else {
        return post;
    }
  });
    setPostList(updatedPostList);
  };
  const [darkMode, setDarkMode] = useState(false); 
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
  <div className="container-fluid">
    <div className={darkMode ? 'dark-mode' : 'liweb'} >
      <div className="navbar-fixed">
        <NaviBar
          userLoggedIn={userLoggedIn}
          setUserLoggedIn={setUserLoggedIn}
          toggleDarkMode={toggleDarkMode}
          darkMode={darkMode}
        ></NaviBar>
      </div>
      <div className="row">
        <div className="col-3 vh-100 leftSideCol">
          <LeftSide></LeftSide>
        </div>
        <div className="col pidCol">
          <div>
            <div>
              <AddPost
                setPosts={setPostList}
                posts={postList}
                userLoggedIn={userLoggedIn}
              ></AddPost>
            </div>
            <div>
              {postList.map((post) => (
                <Post
                  key={post.id}
                  {...post}
                  deletePost={handleDeletePost}
                  deletePicture={handleDeletePicture}
                  userLoggedIn={userLoggedIn}
                  addPicture={handleAddPicture}
                ></Post>
              ))}
            </div>
          </div>
        </div>
        <div className="col-3 vh-100 rightSideCol">
          <RightSide></RightSide>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Pid;

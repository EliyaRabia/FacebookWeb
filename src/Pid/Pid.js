import "./Pid.css" 
import Post from "./Post/Post";
import AddPost from "./AddPost/AddPost"
import NaviBar from './NaviBar/NaviBar';
import LeftSide from './LeftSide/LeftSide';
import RightSide from "./RightSide/RightSide";
import EditUser from "./EditUser/EditUser";
import React, { useState , useRef, useEffect } from "react";
import { getAllPosts } from "../ServerCalls/postsCalls";
/*
this component is the main component of the pid page
it will render the navbar, the left side, the right side and the posts and the add post component
it will also handle the delete of the post and the delete of the picture
it gets the userLoggedIn, setUserLoggedIn, postList, setPostList, id,setId, idComment and setIdComment as props
*/
function Pid({ setUserLoggedIn, userLoggedIn,idComment,setIdComment , token, setToken}) { 
   // this state is used to set the dark mode
  const [darkMode, setDarkMode] = useState(false);
  const [mode, setMode] = useState(0);
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    if (token) {
      getAllPosts(token).then((result) => setPostList(result.data));
    }
  }, [token]);
  // this function is used to delete a post
  const handleDeletePost = (postId) => {
    const updatedPosts = postList.filter((post) => post._id !== postId);
    setPostList(updatedPosts);
  };
  // this function is used to delete a picture
  const handleDeletePicture = (postId) => {
    // this find the post that has the picture and delete it
    const updatedPostList = postList.map((post) => {
      if (post._id === postId) {
        return { ...post, pictures: null };
      } else {
        // if the post does not have the picture we just return the post
        return post;
      }
    // we set the postList with the updated postList
    });
    // we set the postList with the updated postList
    setPostList(updatedPostList);
  };
  // this function is used to add a picture to a post
  const handleAddPicture = (postId,photo) => {
    // this find the need to update the post with the new picture
    const updatedPostList = postList.map((post) => {  
      if (post._id === postId) {
        // we return the post with the new picture
        return { ...post, pictures: photo };
      // if the post does not have the picture we just return the post
      } else {
        return post;
    }
  });
  // we set the postList with the updated postList
    setPostList(updatedPostList);
  };

  const addPost = (newPost) => {
    setPostList([newPost, ...postList]);
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className="container-fluid">
      <div className={darkMode ? "dark-mode" : "liweb"}>
        <div className="navbar-fixed">
          <NaviBar
            userLoggedIn={userLoggedIn}
            setUserLoggedIn={setUserLoggedIn}
            toggleDarkMode={toggleDarkMode}
            darkMode={darkMode}
            setMode={setMode}
          ></NaviBar>
        </div>
        <div className="row">
          <div className="col-3 vh-100 leftSideCol">
            <LeftSide></LeftSide>
          </div>
          <div className="col pidCol">
            {mode === 0 && (
              <div>
                <div>
                  <AddPost
                    addPostState={addPost}
                    userLoggedIn={userLoggedIn}
                    token={token}
                  ></AddPost>
                </div>
                <div>
                  {postList.map((post) => (
                    <Post
                      key={post._id}
                      {...post}
                      deletePostState={handleDeletePost}
                      deletePicture={handleDeletePicture}
                      userLoggedIn={userLoggedIn}
                      addPicture={handleAddPicture}
                      idComment={idComment}
                      setIdComment={setIdComment}
                      token={token}
                    ></Post>
                  ))}
                </div>
              </div>
            )}
            {mode === 1 && ( 
              <div>
                <EditUser
                  userLoggedIn={userLoggedIn}
                  setUserLoggedIn={setUserLoggedIn}
                  token={token}
                  setToken={setToken}
                  setMode={setMode}
                ></EditUser>
              </div>
            )}
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

import "./AddPost.css"
import React, { useState , useRef } from "react";
/*
this component is used to add a post
it gets the setPosts, posts, userLoggedIn,id and setId as props
*/
function AddPost({setPosts, posts,userLoggedIn,id,setId}){
    // all the refs that we get from the form
    const postText= useRef("");
    const [photo, setPhoto] = useState(null);
    const fileInput = useRef(null);
    let currentTime = new Date();
    // this function is user to delete the photo that the user has uploaded
    function handleCancelPhoto() {
      setPhoto(null);
    }
    // this function is used to open the file input when the user clicks on the photo button
    function handleButtonClick() {
        fileInput.current.click();
    }
    // this function is used to get the photo that the user has uploaded
    function handleFileChange(event) {
        // if the user has uploaded a photo then we set the photo state to the photo that the user has uploaded
        if (event.target.files.length > 0) {
            setPhoto(URL.createObjectURL(event.target.files[0]));
        }
        event.target.value = null;
    }
    // this function is used to add a post
    function addPost(){
        // this is used to check if the user has entered some text or not
        if(postText.current.value === ""){
            alert("Please enter some text");
            return;
        }
        // this is used to add the post to the posts array
        const newPost = {
            id: id,
            fullname: userLoggedIn.displayName,
            initialText: postText.current.value,
            icon: userLoggedIn.photo,
            pictures: photo,
            time: currentTime.toLocaleString(),
            likes: 0,
            commentsNumber: 0,
            comments: []
        }
        // this is used to add the new post to the state
        setPosts([newPost,...posts]);
        setId(id+1);
        // this is used to reset the form
        postText.current.value = "";
        setPhoto(null);
        alert("Post added successfully");
    }
    // this is used to get the photo of the user if the user has uploaded a photo
    //const photoUrl = userLoggedIn && userLoggedIn.photo ? URL.createObjectURL(userLoggedIn.photo) : null;
    return (
      <div className="postadd1">
        <div className="container-post">
          <div className="user-profile">
            <img src={userLoggedIn.photo} className="avatar__img" alt="User avatar" />
            <div>
              <p className="p">{userLoggedIn.displayName}</p>
            </div>
          </div>
          <div className="input-preview">
            <textarea
              className="form-control-post"
              id="formControl"
              rows="3"
              placeholder={`${userLoggedIn.displayName}, what do u think?`}
              ref={postText}
            ></textarea>
          </div>
          <div className="photo-preview">
            {photo && (
            <>
              <button onClick={handleCancelPhoto}>Delete Photo</button>
              <img src={photo} alt="Preview" />
            </>
            )}
          </div>
          <div className="button-group-post">
            <button type="button" className="btn btn-outline-primary">
              <i className="material-icons">video_call</i>Live Video
            </button>
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={handleButtonClick}
            >
              <i className="material-icons">add_a_photo</i>Photo/Video
            </button>
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              style={{ display: "none" }}
              ref={fileInput}
              onChange={handleFileChange}
            />
            <button type="button" className="btn btn-outline-primary">
              <i className="material-icons">insert_emoticon</i>Felling/Activity
            </button>
          </div>
          <div className="button-post">
            <button type="button" className="btn btn-primary" onClick={addPost}>
              Post
            </button>
          </div>
        </div>
      </div>
    );
}
export default AddPost;
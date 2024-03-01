import React, { useState, useRef } from "react";
import "./Post.css";
import PostManagement from "./PostManagement/PostManagement";
import { deletePost,updatePost } from "../../ServerCalls/userCalls";
import {convertToBase64} from "../../UsableFunctions/ImageFunctions";
/*
this component is the post component, it contains the post and the post management
this compenet get what is needed to show the post and the post management
*/
function Post({
  _id,
  idUserName,
  fullname,
  icon,
  initialText,
  pictures,
  time,
  likes,
  commentsNumber,
  comments,
  deletePostState,
  deletePicture,
  addPicture,
  userLoggedIn,
  idComment,
  setIdComment,
  token,
}) {
  // Set the initial state of the text, the edit mode and the edited text
  const [text, setText] = useState(initialText);
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);
  const fileInput = useRef(null);
  const iconUrl = icon instanceof File ? URL.createObjectURL(icon) : icon;
  const picturesUrl =
    pictures instanceof File ? URL.createObjectURL(pictures) : pictures;
  // Handle the edit text button click
  const handleEditText = () => {
    setIsEditing(true);
    setEditedText(text);
  };
  // Handle the save text button click
  const handleSaveText = async() => {
    setIsEditing(false);
    if(editedText === ""){
      alert("The text can't be empty");
      return;
    }
    const post = {
      _id: _id,
      initialText: editedText,
      pictures: pictures,
    };
    const status = await updatePost(token,post, userLoggedIn._id);
    if (status === 200) {
      setText(editedText);
      alert("Post text edited successfully");
    } else {
      alert("There was a problem with the fetch operation: ", status);
    }
  };
  // Handle the cancel edit button click
  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedText(text);
  };
  // Handle the delete post button click
  const handleDeletePost = async () => {
    const status = await deletePost(token, _id, userLoggedIn._id);
    if (status === 200) {
      deletePostState(_id);
      alert("Post deleted successfully");
    } else {
      alert("There was a problem with the fetch operation: ", status);
    }
  };
  // Handle the delete picture button click
  const handleDeletePicture = async() => {
    const post = {
      _id: _id,
      initialText: initialText,
      pictures: null,
    };
    const status = await updatePost(token,post, userLoggedIn._id);
    if (status === 200) {
      deletePicture(_id);
      alert("Post picture deleted successfully");
    } else {
      alert("There was a problem with the fetch operation: ", status);
    }
  };
  // Handle the add picture button click
  function handleButtonClick() {
    fileInput.current.click();
  }
  // Handle the file change
  async function handleFileChange(event) {
    if (event.target.files.length > 0) {
      const selectedFile = event.target.files[0];
      const base64 = await convertToBase64(selectedFile);
      const post = {
        _id: _id,
        initialText: initialText,
        pictures: base64,
      };
    const status = await updatePost(token,post, userLoggedIn._id);
    if (status === 200) {
      addPicture(_id, base64);
      alert("Post picture added successfully");
    } else {
      alert("There was a problem with the fetch operation: ", status);
    }

    }
  }
  return (
    <div className="post1">
      <div className="post">
        <div className="card1">
          <div className="topPost">
            <div className="user-profile">
              {icon && (
                <img src={iconUrl} className="avatar__img" alt="User avatar" />
              )}
              <div className="text-profile">
                <p className="p">{fullname}</p>
                <span>{time}</span>
              </div>
            </div>
            {userLoggedIn._id === idUserName && (
              <div
                className="btn-group"
                role="group"
                aria-label="Button group with nested dropdown"
              >
                <div className="btn-group" role="group">
                  <button
                    type="button"
                    className="btn edit"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="bi bi-three-dots-vertical"></i>
                  </button>
                  <ul className="dropdown-menu">
                    {pictures ? (
                      <li>
                        <a
                          className="dropdown-item"
                          onClick={handleDeletePicture}
                        >
                          <i className="bi bi-trash3-fill"></i> Delete picture
                        </a>
                      </li>
                    ) : (
                      <li>
                        <a
                          className="dropdown-item"
                          onClick={handleButtonClick}
                        >
                          <i className="bi bi-folder-plus"></i> Add picture
                          <input
                            type="file"
                            id="fileInput"
                            accept="image/*"
                            style={{ display: "none" }}
                            ref={fileInput}
                            onChange={handleFileChange}
                          ></input>
                        </a>
                      </li>
                    )}
                    <li>
                      <a className="dropdown-item" onClick={handleEditText}>
                        <i className="bi bi-textarea-t"></i> Edit text
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" onClick={handleDeletePost}>
                        <i className="bi bi-x-lg"></i> Delete post
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
          <div className="card-body">
            {isEditing ? (
              <div>
                <textarea
                  className="card-text-editTextArea"
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                ></textarea>
                <button className="editButton" onClick={handleSaveText}>
                  <i className="bi bi-check-lg"></i>
                </button>
                <button className="editButton" onClick={handleCancelEdit}>
                  <i className="bi bi-trash3-fill"></i>
                </button>
              </div>
            ) : (
              <p className="card-text">{text}</p>
            )}
          </div>
          {picturesUrl && (
            <img
              src={picturesUrl}
              className="card-img-top"
              alt="Post content"
            />
          )}
          <PostManagement
            likes={likes}
            commentsNumber={commentsNumber}
            initialComments={comments}
            userLoggedIn={userLoggedIn}
            idComment={idComment}
            setIdComment={setIdComment}
          ></PostManagement>
        </div>
      </div>
    </div>
  );
}

export default Post;

import React, { useState, useRef } from "react";
import "./Post.css";
import PostManagement from "./PostManagement/PostManagement";
/*
this component is the post component, it contains the post and the post management
this compenet get what is needed to show the post and the post management
*/
function Post({
  id,
  fullname,
  icon,
  initialText,
  pictures,
  time,
  likes,
  commentsNumber,
  comments,
  deletePost,
  deletePicture,
  addPicture,
  userLoggedIn,
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
  const handleSaveText = () => {
    setIsEditing(false);
    setText(editedText);
  };
  // Handle the cancel edit button click
  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedText(text);
  };
  // Handle the delete post button click
  const handleDeletePost = () => {
    deletePost(id);
  };
  // Handle the delete picture button click
  const handleDeletePicture = () => {
    deletePicture(id);
  };
  // Handle the add picture button click
  function handleButtonClick() {
    fileInput.current.click();
  }
  // Handle the file change
  function handleFileChange(event) {
    if (event.target.files.length > 0) {
      const selectedFile = event.target.files[0];
      addPicture(id, selectedFile);
    }
  }
  return (
    <div className="post1">
      <div className="post">
        <div className="card1">
          <div className="topPost">
            <div className="user-profile">
              {icon && <img src={iconUrl} className="avatar__img" alt="User avatar" />}
              <div className="text-profile">
                <p className="p">{fullname}</p>
                <span>{time}</span>
              </div>
            </div>
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
                      <a className="dropdown-item" onClick={handleButtonClick}>
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
          </div>
          <div className="card-body">
            {isEditing ? (
              <div>
                <textarea className="card-text-editTextArea"
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
          ></PostManagement>
        </div>
      </div>
    </div>
  );
}

export default Post;

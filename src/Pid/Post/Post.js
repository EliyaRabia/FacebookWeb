import React, { useState,useRef } from "react";
import "./Post.css";
import PostManagement from "./PostManagement/PostManagement";

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
    const [text, setText] = useState(initialText);
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(text);
    const fileInput = useRef(null);
    const [photo, setPhoto] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const iconUrl = icon instanceof File ? URL.createObjectURL(icon) : icon;
    const picturesUrl =
    pictures instanceof File ? URL.createObjectURL(pictures) : pictures;




  const handleEditText = () => {
    setIsEditing(true);
    setEditedText(text);
  };

  const handleSaveText = () => {
    setIsEditing(false);
    setText(editedText);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedText(text);
  };

  const handleDeletePost = () => {
    deletePost(id); 
  };

  const handleDeletePicture = () => {
    deletePicture(id)
  };

  const handleAddPicture = () => {
    addPicture(id, photo);
  };

  function handleButtonClick() {
    fileInput.current.click();
  }

function handleFileChange(event) {
  if (event.target.files.length > 0) {
    const selectedFile = event.target.files[0];
    const imageUrl = URL.createObjectURL(selectedFile);
    setSelectedFile(selectedFile);
    setPhoto(imageUrl);
    addPicture(id, selectedFile);
  }
}

  return (
  <div className="post1">
    <div className="post">
      <div className="card1">
        <div className="topPost">
          <div class="user-profile">
            {icon && <img src={iconUrl} className="avatar__img"/>}
            <div className="text-profile">
              <p>{fullname}</p>
              <span>{time}</span>
            </div>
          </div>
          <div
            className="btn-group"
            role="group"
            aria-label="Button group with nested dropdown"
          >
            <div class="btn-group" role="group">
              <button
                type="button"
                class="btn edit"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="bi bi-three-dots-vertical"></i>
              </button>
              <ul class="dropdown-menu">
                <li>
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
                        <i class="bi bi-folder-plus"></i> Add picture
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
                </li>
                <li>
                  <a class="dropdown-item" onClick={handleEditText}>
                    <i class="bi bi-textarea-t"></i> Edit text
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" onClick={handleDeletePost}>
                    <i class="bi bi-x-lg"></i> Delete post
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card-body">
          {isEditing ? (
            <div>
              <textarea
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
              ></textarea>
              <button className="editButton" onClick={handleSaveText}>
                <i class="bi bi-check-lg"></i>
              </button>
              <button className="editButton" onClick={handleCancelEdit}>
                <i class="bi bi-trash3-fill"></i>
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
            style={{ width: "10rem" }}
            alt="Post"
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

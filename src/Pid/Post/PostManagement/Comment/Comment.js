import "./Comment.css";
import React, { useState } from "react";

function Comment({ id, fullname, icon, text, onDelete, setCommentsCount }) {
  const handleDeleteClick = () => {
    onDelete(id);
    setCommentsCount();
  };

  const [commentText, setCommentText] = useState(text);
  const [editMode, setEditMode] = useState(false);
  const [originalText, setOriginalText] = useState(text);
  const iconUrl = icon instanceof File ? URL.createObjectURL(icon) : icon;

  const handleInputChange = (event) => {
    setCommentText(event.target.value);
  };

  const handleEditClick = () => {
    setEditMode(true);
    setOriginalText(commentText);
  };

  const handleSaveClick = () => {
    setEditMode(false);
  };

  const handleRestoreClick = () => {
    setCommentText(originalText); 
    setEditMode(false); 
  };


  return (
    <div className="commentDiv">
      <div class="avatar">
        {icon && <img src={iconUrl} class="avatar__img" alt="User"/>} 
        <span>{fullname}:</span>{" "}
      </div> 
      {editMode ? (
        <textarea value={commentText} onChange={handleInputChange} />
      ) : (
        <span>{commentText}</span>
      )}
      <div>
        {editMode ? (
          <React.Fragment>
            <button className="editButton" onClick={handleSaveClick}>
              <i class="bi bi-check-lg"></i>
            </button>
            <button className="editButton" onClick={handleRestoreClick}>
              <i class="bi bi-trash3-fill"></i>
            </button>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <button className="editButton" onClick={handleEditClick}>
              <i class="bi bi-pencil-fill"></i>
            </button>
            <button className="editButton" onClick={handleDeleteClick}>
              <i class="bi bi-trash3-fill"></i>
            </button>
          </React.Fragment>
        )}
      </div>
      <hr></hr>
    </div>
  );
}

export default Comment;

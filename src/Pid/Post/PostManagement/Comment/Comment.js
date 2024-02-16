import "./Comment.css";
import React, { useState } from "react";
/*
this component is the comment component, it contains the comment and the comment management
*/
function Comment({id, fullname, icon, text, onDelete, setCommentsCount }) {
  const handleDeleteClick = () => {
    onDelete(id);
    setCommentsCount();
  };
  // Set the initial state of the text, the edit mode and the edited text
  const [commentText, setCommentText] = useState(text);
  const [editMode, setEditMode] = useState(false);
  const [originalText, setOriginalText] = useState(text);
  const iconUrl = icon instanceof File ? URL.createObjectURL(icon) : icon;
  // Handle the input change
  const handleInputChange = (event) => {
    setCommentText(event.target.value);
  };
  // Handle the edit button click
  const handleEditClick = () => {
    setEditMode(true);
    setOriginalText(commentText);
  };
  // Handle the save button click
  const handleSaveClick = () => {
    setEditMode(false);
  };
  // Handle the restore button click
  const handleRestoreClick = () => {
    setCommentText(originalText); 
    setEditMode(false); 
  };
  return (
    <div className="commentDiv">
      <div className="avatar">
        {icon && <img src={iconUrl} className="avatar__img" alt="User" />}
        <span>{fullname}:</span>{" "}
      </div>
      {editMode ? (
        <textarea className="textarea" value={commentText} onChange={handleInputChange} />
      ) : (
        <span className="span">{commentText}</span>
      )}
      <div>
        {editMode ? (
          <React.Fragment>
            <button className="editButton" onClick={handleSaveClick}>
              <i className="bi bi-check-lg"></i>
            </button>
            <button className="editButton" onClick={handleRestoreClick}>
              <i className="bi bi-trash3-fill"></i>
            </button>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <button className="editButton" onClick={handleEditClick}>
              <i className="bi bi-pencil-fill"></i>
            </button>
            <button className="editButton" onClick={handleDeleteClick}>
              <i className="bi bi-trash3-fill"></i>
            </button>
          </React.Fragment>
        )}
      </div>
      <hr></hr>
    </div>
  );
}

export default Comment;

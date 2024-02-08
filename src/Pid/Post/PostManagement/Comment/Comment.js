import "./Comment.css";

function Comment({ id, fullname, icon, text, onDelete, setCommentsCount }) {
  const handleDeleteClick = () => {
    onDelete(id);
    setCommentsCount();
  };


  return (
    <div className="commentDiv">
      {fullname}: {text}
      <div>
        <button> edit</button>
        <button onClick={handleDeleteClick}>Delete</button>
      </div>
      <hr></hr>
    </div>
  );
}

export default Comment;

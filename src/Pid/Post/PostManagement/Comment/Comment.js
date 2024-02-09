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
        <i class="bi bi-pencil-fill"></i>
        <button onClick={handleDeleteClick}>Delete</button>
      </div>
      <hr></hr>
    </div>
  );
}

export default Comment;

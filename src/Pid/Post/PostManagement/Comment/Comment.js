import "./Comment.css";

function Comment({ id, fullname, icon, text }) {
  return (
    <div className="commentDiv">
      {fullname}: {text}
      <hr></hr>
    </div>
  );
}

export default Comment;

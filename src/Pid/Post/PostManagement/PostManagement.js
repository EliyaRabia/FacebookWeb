import "./PostManagement.css";
import { useState } from "react";
import Comment from "./Comment/Comment";

function PostManagement({
  likes,
  commentsNumber,
  initialComments,
  userLoggedIn,
}) {
  const [likesCount, setLikesCount] = useState(likes);
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState(initialComments);
  const [commentsCount, setCommentsCount] = useState(commentsNumber);
  const [newCommentText, setNewCommentText] = useState("");

  const handleLikeClick = () => {
    if (liked) {
      setLikesCount((prevLikesCount) => prevLikesCount - 1);
    } else {
      setLikesCount((prevLikesCount) => prevLikesCount + 1);
    }
    setLiked(!liked);
  };

  const [showComments, setShowComments] = useState(false);

  const handleShowComments = () => {
    setShowComments(!showComments);
  };

  const handleDeleteComment = (commentId) => {
    // Filter out the comment with the specified commentId
    const updatedComments = comments.filter(
      (comment) => comment.id !== commentId
    );
    // Update the comments state with the filtered comments
    setComments(updatedComments);
  };

  const handleDeleteCommentCount = () => {
    setCommentsCount((prevCommentCount) => prevCommentCount - 1);
  };

  const handleSendComment = () => {
    if (newCommentText.trim() !== "") {
      const newComment = {
        id: comments.length + 1,
        fullname: userLoggedIn.displayName,
        text: newCommentText,
        icon: userLoggedIn.photo
      };
      setComments([...comments, newComment]);
      setCommentsCount((prevCommentCount) => prevCommentCount + 1);
      setNewCommentText("");
    }
  };

  return (
    <div className="postManagement">
      <button
        type="button"
        className="btn btn-light position-relative"
        onClick={handleLikeClick}
      >
        {liked ? (
          <i class="bi bi-hand-thumbs-up-fill"></i>
        ) : (
          <i class="bi bi-hand-thumbs-up"></i>
        )}
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
          {likesCount} <span class="visually-hidden">unread messages</span>
        </span>
      </button>
      <button
        type="button"
        className="btn btn-light position-relative"
        onClick={handleShowComments}
      >
        <i class="bi bi-chat-text"></i>{" "}
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
          {commentsCount} <span class="visually-hidden">unread messages</span>
        </span>
      </button>
      <button type="button" className="btn btn-light position-relative">
        <i class="bi bi-pencil-fill"></i>
      </button>
      <div
        class="btn-group"
        role="group"
        aria-label="Button group with nested dropdown"
      >
        <div class="btn-group" role="group">
          <button
            type="button"
            class="btn btn-light"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="bi bi-cursor"></i>
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item">
                <i class="bi bi-reply"></i> Share now
              </a>
            </li>
            <li>
              <a class="dropdown-item">
                <i class="bi bi-messenger"></i> Send in Messenger
              </a>
            </li>
            <li>
              <a class="dropdown-item">
                <i class="bi bi-whatsapp"></i> What's Up
              </a>
            </li>
            <li>
              <a class="dropdown-item">
                <i class="bi bi-twitter"></i> Send in Twitter
              </a>
            </li>
            <li>
              <a class="dropdown-item">
                <i class="bi bi-link-45deg"></i> Copy link
              </a>
            </li>
          </ul>
        </div>
      </div>
      {showComments && (
        <div>
          <div>
            <div class="input-group mb-3">
              <button
                type="button"
                class="btn btn-dark"
                onClick={handleSendComment}
              >
                <i class="bi bi-send"></i>
              </button>
              <textarea
                className="form-control"
                aria-label="With textarea"
                value={newCommentText}
                onChange={(e) => setNewCommentText(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="comment">
            {comments.map((comment) => (
              <Comment
                {...comment}
                onDelete={handleDeleteComment}
                setCommentsCount={handleDeleteCommentCount}
              ></Comment>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default PostManagement;

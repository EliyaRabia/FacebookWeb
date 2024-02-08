import "./PostManagement.css";
import { useState } from "react";
import Comment from "./Comment/Comment";

function PostManagement({ likes, commentsNumber, comments }) {
  const [likesCount, setLikesCount] = useState(likes);
  const [liked, setLiked] = useState(false);

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

  return (
    <div className="postManagement">
      <button
        type="button"
        className="btn btn-light position-relative"
        onClick={handleLikeClick}
      >
        <i class="bi bi-hand-thumbs-up"></i>{" "}
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
          {commentsNumber} <span class="visually-hidden">unread messages</span>
        </span>
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
        <div className="comment">
          {comments.map((comment) => (
            <Comment {...comment}></Comment>
          ))}
        </div>
      )}
    </div>
  );
}

export default PostManagement;

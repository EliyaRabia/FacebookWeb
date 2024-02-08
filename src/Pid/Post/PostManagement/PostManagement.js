import "./PostManagement.css";

function PostManagement({ likes, commentsNumber }) {
  return (
    <div className="postManagement">
      <button type="button" className="btn btn-primary position-relative">
        <i class="bi bi-hand-thumbs-up"></i>{" "}
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
          {likes} <span class="visually-hidden">unread messages</span>
        </span>
      </button>
      <button type="button" className="btn btn-primary position-relative">
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
            class="btn btn-primary"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="bi bi-cursor"></i>
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item">
                {" "}
                <i class="bi bi-whatsapp"></i> What's Up
              </a>
            </li>
            <li>
              <a class="dropdown-item">Dropdown link</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PostManagement;

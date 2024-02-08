import dogImage from "./dog.jpg";
import "./Post.css";
import PostManagement from "./PostManagement/PostManagement";

function Post({
  id,
  fullname,
  icon,
  text,
  pictures,
  time,
  likes,
  commentsNumber,
  comments,
  setPost,
}) {
  return (
    <div className="post">
      <div className="card" style={{ width: "18rem" }}>
        <h5 class="card-title">
          {fullname} {time}
        </h5>
        <div class="card-body">
          <p class="card-text">{text}</p>
        </div>
        <img
          src={dogImage}
          class="card-img-top"
          style={{ width: "10rem" }}
        ></img>
        <PostManagement likes={likes} commentsNumber={commentsNumber}></PostManagement>
      </div>
    </div>
  );
}

export default Post;

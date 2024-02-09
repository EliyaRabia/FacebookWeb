import dogImage from "./pictures/picture1.jpg";
import "./Post.css";
import PostManagement from "./PostManagement/PostManagement";
// import Carousel from "./Carousel/Carousel";

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
  userLoggedIn,
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
        {/* <Carousel pictures={pictures}></Carousel> */}
        <PostManagement
          likes={likes}
          commentsNumber={commentsNumber}
          initialComments={comments}
          userLoggedIn={userLoggedIn}
        ></PostManagement>
      </div>
    </div>
  );
}

export default Post;

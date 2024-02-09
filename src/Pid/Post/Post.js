import dogImage from "./pictures/picture1.jpg";
import "./Post.css";
import PostManagement from "./PostManagement/PostManagement";
// import Carousel from "./Carousel/Carousel";

function Post({
  key,
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
  const iconUrl = icon instanceof File ? URL.createObjectURL(icon) : icon;
  return (
    <div className="post">
      <div className="card" style={{ width: "18rem" }}>
      <div class="avatar">
        {icon && <img src={iconUrl} class="avatar__img" alt="User"/>} 
        </div> 
        <h5 class="card-title">
          {fullname + " "}
          {time}
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

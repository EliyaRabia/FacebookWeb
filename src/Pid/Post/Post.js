import React from "react";
import "./Post.css";
import PostManagement from "./PostManagement/PostManagement";

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
  const picturesUrl = pictures instanceof File ? URL.createObjectURL(pictures) : pictures;
  return (
    <div className="post">
      <div className="card" style={{ width: "18rem" }}>
      <div class="avatar">
        {icon && <img src={iconUrl} class="avatar__img" alt="User"/>}
        <h5 class="card-title">
          {fullname + " "}
          {time}
        </h5> 
      </div> 
        <div class="card-body">
          <p class="card-text">{text}</p>
        </div>
        {picturesUrl && (
          <img
            src={picturesUrl}
            className="card-img-top"
            style={{ width: "10rem" }}
            alt="Post"
          />
        )}
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

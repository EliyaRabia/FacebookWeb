import Post from "./Post/Post";
import Posts from "../data/db.json"

function Pid() {
  return (
    <div>
      <h1>hiiiii</h1>
      <div>
        {
          Posts.map((post) => 
            <Post {...post}></Post>
        )}
      </div>
    </div>
  );
}

export default Pid;

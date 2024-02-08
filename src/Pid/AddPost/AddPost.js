import "./AddPost.css"
import React, { useState , useRef } from "react";
function AddPost({setPosts, posts}){
    const postText= useRef("");
    const [photo, setPhoto] = useState(null);
    const fileInput = useRef(null);
    let currentTime = new Date();
    function handleButtonClick() {
        fileInput.current.click();
    }
    function handleFileChange(event) {
        setPhoto(URL.createObjectURL(event.target.files[0]));
    }
    function addPost(){
        if(postText.current.value === ""){
            alert("Please enter some text");
            return;
        }
        const newPost = {
            id: posts.length + 1,
            fullname: "Or",
            text: postText.current.value,
            icon:"picture",
            pictures: photo,
            time: currentTime.toLocaleString(),
            likes: 0,
            commentsNumber: 0,
            comments: []
        }
        setPosts([...posts,newPost]);
        postText.current.value = "";
        setPhoto(null);
        alert("Post added successfully");
    }
    console.log(posts);
    return(
        <div className="container-post">
            <div className="input-preview">
                <textarea className="form-control-post" id="formControl" rows="3" placeholder="What do u think?" ref={postText}></textarea>
            </div>
            <div className="photo-preview">
                {photo && <img src={photo} alt="Preview" />}
            </div>
            <div className="button-group-post">
                <button type="button" className="btn btn-outline-primary">Live Video</button>
                <button type="button" className="btn btn-outline-primary" onClick={handleButtonClick}>Photo/Video</button>
                <input type="file" id="fileInput" accept="image/*" style={{display: 'none'}} ref={fileInput} onChange={handleFileChange} />
                <button type="button" className="btn btn-outline-primary">Felling/Activity</button>
            </div>
            <button type="button" className="btn btn-primary" onClick={addPost}>Post</button>
        </div>
    );
}
export default AddPost;
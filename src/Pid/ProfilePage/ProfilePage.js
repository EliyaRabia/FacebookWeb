import "./ProfilePage.css"
import React, { useState , useRef , useEffect } from "react";
import { getUserData } from "../../ServerCalls/login";
import { getAllFriends , getPostsByUser } from "../../ServerCalls/userCalls";
import Post from "../Post/Post";
import FriendsView from "./FriendsView/FriendsView";
function ProfilePage({userLoggedIn , profileId , setMode , token,handleDeletePost,handleDeletePicture,addPicture,idComment,setIdComment,refresh,handleProfilePage,render}){
    const [profileData, setProfileData] = useState({});
    const [posts, setPosts] = useState([]);
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        if (token) {
            getUserData(token, profileId).then((result) => setProfileData(result));
        }
    }, [profileId,token,render]);
    useEffect(() => {
        if (token) {
            getAllFriends(token, profileId).then((result) => setFriends(result));
        }
    }, [profileId,token,render]);
    console.log(friends);
    useEffect(() => {
        if (token) {
            getPostsByUser(token, profileId).then((result) => setPosts(result));
        }
    }, [profileId,token,render]);
    console.log(posts);
    console.log(render);
    return(
        
        <div className="profile-container">
            <div className="warper">
            <div className="top-section">
                <div className="pd-left">
                    <div className="pd-row">
                        <img src={profileData.photo} className="pd-image" alt=""></img>
                        <div className="op">
                            <h3>{profileData.displayName}</h3>
                            <p>{profileData.friendsList?.length} friends</p>
                        </div>
                    </div>
                </div>
                <div className="pd-right">
                    <button type="button">add friend</button>
                </div>
                </div>
            </div>
            <div className="bottom-section">
                <FriendsView
                    userLoggedIn={userLoggedIn}
                    friends={friends}>
                </FriendsView>
            </div>
            <div className="bottom-section">
                {Array.isArray(posts) && posts.length > 0 && posts.map((post) => (
                    <Post
                        key={post._id}
                        {...post}
                        deletePostState={handleDeletePost}
                        deletePicture={handleDeletePicture}
                        userLoggedIn={userLoggedIn}
                        addPicture={addPicture}
                        idComment={idComment}
                        setIdComment={setIdComment}
                        token={token}
                        refresh={refresh}
                        handleProfilePage={handleProfilePage}
                    ></Post>
                ))}
                {!Array.isArray(posts) && <p>You need to be his friend to show his posts</p>}
                {Array.isArray(posts) && posts.length === 0 && <p>No posts available</p>}
            </div>
            
        </div>
    )
}
export default ProfilePage;
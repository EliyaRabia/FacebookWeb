import "./ProfilePage.css"
import React, { useState , useRef , useEffect } from "react";
import { getUserData } from "../../ServerCalls/login";
import { getAllFriends , getPostsByUser } from "../../ServerCalls/userCalls";
function ProfilePage({userLoggedIn , profileId , setMode , token}){
    const [profileData, setProfileData] = useState({});
    const [posts, setPosts] = useState([]);
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        if (token) {
            getUserData(token, profileId).then((result) => setProfileData(result));
        }
    }, [profileId,token]);
    useEffect(() => {
        if (token) {
            getAllFriends(token, profileId).then((result) => setFriends(result));
        }
    }, [profileId,token]);
    console.log(friends);
    useEffect(() => {
        if (token) {
            getPostsByUser(token, profileId).then((result) => setPosts(result));
        }
    }, [profileId,token]);
    console.log(posts);
    return(
        
        <div className="profile-container">
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
                </div>
            </div>
            <div className="bottom-section">
            </div>
            
        </div>
    )
}
export default ProfilePage;
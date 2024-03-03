import "./FriendsView.css"
import React, { useState , useRef , useEffect } from "react";
function FriendsView({userLoggedIn, friends}) {
    return (
        <div className="friends-section">
            <div className="title-box"><h3>Friends:</h3></div>
            <div className="friends-box">
            {friends && friends.map((friend) => (
                <div className="list" key={friend._id}>
                    <div className="friend-img">
                        <img src={friend.photo} alt={friend.displayName} className="f-img" />
                    </div>
                    <p className="friend-string">{friend.displayName}</p>
                </div>
            ))}
        </div>
        </div>
    )
}
export default FriendsView;
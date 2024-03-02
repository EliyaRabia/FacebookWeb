import "./FriendsView.css"
import React, { useState , useRef , useEffect } from "react";
function FriendsView({userLoggedIn, friends}) {
    console.log(friends);
    return (
        <div className="friends-section">
            <h3>Friends: </h3>
            {friends && friends.map((friend) => (
                <div className="list" key={friend._id}>
                    <div className="friend-img">
                        <img src={friend.photo} alt={friend.displayName} />
                    </div>
                    <p className="friend-string">{friend.displayName}</p>
                </div>
            ))}
        </div>
    )
}
export default FriendsView;
import "./DownOptions.css"
import { getAllFriends} from "../../../ServerCalls/userCalls";
import React, { useState , useRef , useEffect } from "react";
// this is the chat component
function DownOptions({userLoggedIn , token}){
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        if (token) {
            getAllFriends(token, userLoggedIn._id).then((result) => setFriends(result));
        }
    }, [userLoggedIn,token]);
    return (
      <div className="down_options">
          <div className="leftbar_title">
              <h4>Friends List</h4>
          </div>
          {friends.map((friend) => (
              <div className="online-list" key={friend._id}>
                  <div className="online">
                      <img src={friend.photo} alt={friend.displayName} />
                  </div>
                  <p className="chat">{friend.displayName}</p>
              </div>
          ))}
      </div>
  );
}
export default DownOptions;
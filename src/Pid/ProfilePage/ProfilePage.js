import "./ProfilePage.css"
import React, { useState , useRef } from "react";
function ProfilePage(){
    return(
        
        <div className="profile-container">
            <div className="top-section">
                <div className="pd-left">
                    <div className="pd-row">
                        <img src="https://i.pinimg.com/736x/fa/60/51/fa6051d72b821cb48a8cc71d3481dfef.jpg" className="pd-image" alt=""></img>
                        <div className="op">
                            <h3>Foo Bar</h3>
                            <p>120 Friends</p>
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
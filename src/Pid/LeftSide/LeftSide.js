import "./LeftSide.css"
import UpOptions from "./UpOptions/UpOptions"; 
import DownOptions from "./DownOptions/DownOptions";
// this component is the left side of the page, it contains the up and down options
function LeftSide({userLoggedIn , token}){
    return (
      <div className="leftbar">
        <UpOptions></UpOptions>
        <DownOptions
        userLoggedIn={userLoggedIn}
        token={token}
        ></DownOptions>
      </div>
    );
} 
export default LeftSide;
import "./LeftSide.css"
import UpOptions from "./UpOptions/UpOptions"; 
import DownOptions from "./DownOptions/DownOptions";

function LeftSide(){
    return (
      <div className="leftbar">
        <UpOptions></UpOptions>
        <DownOptions></DownOptions>
      </div>
    );
} 
export default LeftSide;
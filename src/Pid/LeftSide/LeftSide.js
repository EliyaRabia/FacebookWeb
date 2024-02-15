import "./LeftSide.css"
import UpOptions from "./UpOptions/UpOptions"; 
import DownOptions from "./DownOptions/DownOptions";
// this component is the left side of the page, it contains the up and down options
function LeftSide(){
    return (
      <div className="leftbar">
        <UpOptions></UpOptions>
        <DownOptions></DownOptions>
      </div>
    );
} 
export default LeftSide;
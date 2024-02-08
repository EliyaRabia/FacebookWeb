import "./LeftSide.css"
import UpOptions from "./UpOptions/UpOptions"; 
import DownOptions from "./DownOptions/DownOptions";

function LeftSide(){
    return(
        <div class="leftbar">
            <UpOptions></UpOptions>
            <DownOptions></DownOptions>
        </div>
    );
} 
export default LeftSide;
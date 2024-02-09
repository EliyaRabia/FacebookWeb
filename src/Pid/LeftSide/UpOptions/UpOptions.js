import "./UpOptions.css" 
function UpOptions(){
    return(
        <div class="up_options">
            <ul class="list-group">
                <li class="list-group-item d-flex align-items-center">
                    <i class="material-icons">person</i>
                    <span class="m-2">Your Profile</span>
                </li>
                <li class="list-group-item d-flex align-items-center">
                    <i class="material-icons">people</i>
                    <span class="m-2">Friends</span>
                </li>
                <li class="list-group-item d-flex align-items-center">
                    <i class="material-icons">history</i>
                    <span class="m-2">Memories</span>
                </li>
                <li class="list-group-item d-flex align-items-center">
                    <i class="material-icons">turned_in</i>
                    <span class="m-2">Saved</span>
                </li>
                <li class="list-group-item d-flex  align-items-center">
                    <i class="material-icons">groups</i>
                    <span class="m-2">Groups</span>
                </li>
                <li class="list-group-item d-flex align-items-center">
                    <i class="material-icons">ondemand_video</i>
                    <span class="m-2">Video</span>
                </li>
                <li class="list-group-item d-flex align-items-center">
                    <i class="material-icons">keyboard_arrow_down</i>
                    <span class="m-2">See More</span>
                </li>
            </ul>
        </div>
    );
}
export default UpOptions;
import "./UpOptions.css" 
function UpOptions(){
    return (
      <div className="up_options">
        <ul className="list-group">
          <li className="list-group-item d-flex align-items-center">
            <i className="material-icons">person</i>
            <span className="m-2">Your Profile</span>
          </li>
          <li className="list-group-item d-flex align-items-center">
            <i className="material-icons">people</i>
            <span className="m-2">Friends</span>
          </li>
          <li className="list-group-item d-flex align-items-center">
            <i className="material-icons">history</i>
            <span className="m-2">Memories</span>
          </li>
          <li className="list-group-item d-flex align-items-center">
            <i className="material-icons">turned_in</i>
            <span className="m-2">Saved</span>
          </li>
          <li className="list-group-item d-flex  align-items-center">
            <i className="material-icons">groups</i>
            <span className="m-2">Groups</span>
          </li>
          <li className="list-group-item d-flex align-items-center">
            <i className="material-icons">ondemand_video</i>
            <span className="m-2">Video</span>
          </li>
          <li className="list-group-item d-flex align-items-center">
            <i className="material-icons">keyboard_arrow_down</i>
            <span className="m-2">See More</span>
          </li>
        </ul>
      </div>
    );
}
export default UpOptions;
import "./DownOptions.css"
function DownOptions(){
    return(
        <div class="down_options">
            <div class="shortcut_title">
                <p>Your Shortcuts</p>
                <a href="">edit</a>
            </div>
            <ul class="list-group">
                <li class="list-group-item d-flex align-items-center">
                    <span class="m-2">Shortcut 1</span>
                </li>
                <li class="list-group-item d-flex align-items-center">
                    <span class="m-2">Shortcut 2</span>
                </li>
                <li class="list-group-item d-flex align-items-center">
                    <span class="m-2">Shortcut 3</span>
                </li>
                <li class="list-group-item d-flex align-items-center">
                    <span class="m-2">Shortcut 4</span>
                </li>
            </ul>
        </div>
    );
}
export default DownOptions;
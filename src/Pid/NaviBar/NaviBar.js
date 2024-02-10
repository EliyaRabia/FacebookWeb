import "./NaviBar.css" 
import { useNavigate } from "react-router-dom";
function NaviBar({userLoggedIn, setUserLoggedIn,toggleDarkMode,darkMode}){
    const navigate = useNavigate();
    
    const goBack = () => {
    setUserLoggedIn(false);
    navigate("/");
    }; 
    const photoUrl = userLoggedIn && userLoggedIn.photo ? URL.createObjectURL(userLoggedIn.photo) : null;
    return(
        <nav className="navBody" date-testid="navibar">
                <div className="nav__left">
                    <img src="https://brandlogos.net/wp-content/uploads/2021/04/facebook-icon-512x512.png" className="nav_left_img"></img> 
                    <div className="nav__search">
                        <i className="material-icons">search</i>
                        <input type="text" placeholder="Search Facebook"></input>
                    </div>
                </div>
                <div className="nav__mid"> 
                    <a className="iconz">
                        <i className="material-icons">home</i>
                    </a>
                    <a className="iconz">
                        <i className="material-icons">slideshow</i>
                    </a>
                    <a className="iconz">
                        <i className="material-icons">groups</i>
                    </a>
                    <a className="iconz">
                        <i className="material-icons">gamepad</i>
                    </a>
                </div> 
                <div className="nav__right">
                    <div className="avatar">
                        {photoUrl && <img src={photoUrl} className="avatar__img"></img>} 
                        <span><strong>{userLoggedIn.displayName}</strong></span>
                    </div> 
                    <div className="buttons" > 
                    <a className="button">
                        <i className="material-icons">apps</i>
                    </a>
                    <a className="button">
                        <i className="material-icons">notifications</i>
                    </a>
                    <a className="button">
                        <i className="material-icons">messenger</i>
                    </a>
                    <li className="nav_item_dropdown">
                    <a className="button" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="material-icons">settings</i>
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" onClick={toggleDarkMode}>{darkMode ? 'Light Mode' : 'Dark Mode'}</a></li>
                        <li><a className="dropdown-item" onClick={goBack}>Log Out</a></li>
                    </ul>
                    </li>
                    </div>
                </div>

            </nav> 
    );
}
export default NaviBar;
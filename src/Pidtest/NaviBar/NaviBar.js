import "./NaviBar.css" 
function NaviBar(){
    
    return(
        <nav>
                <div class="nav__left">
                    <img src="https://brandlogos.net/wp-content/uploads/2021/04/facebook-icon-512x512.png" class="nav_left_img"></img> 
                    <div class="nav__search">
                        <i class="material-icons">search</i>
                        <input type="text" placeholder="Search Facebook"></input>
                    </div>
                </div>

                <div class="nav__mid"> 
                    <a href ="" class="icon">
                        <i class="material-icons">home</i>
                    </a>
                    <a href ="" class="icon">
                        <i class="material-icons">slideshow</i>
                    </a>
                    <a href ="" class="icon">
                        <i class="material-icons">groups</i>
                    </a>
                    <a href ="" class="icon">
                        <i class="material-icons">gamepad</i>
                    </a>
                </div> 

                <div class="nav__right">
                    <div class="avatar">
                        <img src="https://i.pinimg.com/736x/fa/60/51/fa6051d72b821cb48a8cc71d3481dfef.jpg" class="avatar__img"></img> 
                        <span><strong>User</strong></span>
                    </div> 
                    <div class="buttons" > 
                    <a href ="" class="button">
                        <i class="material-icons">apps</i>
                    </a>
                    <a href ="" class="button">
                        <i class="material-icons">notifications</i>
                    </a>
                    <a href ="" class="button">
                        <i class="material-icons">messenger</i>
                    </a>
                    <li class="nav_item_dropdown">
                    <a a class="button" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="material-icons">settings</i>
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">DarkMode</a></li>
                        <li><a class="dropdown-item" href="#">Log Out</a></li>
                    </ul>
                    </li>
                    
                    </div>
                </div>

            </nav> 
    );
}
export default NaviBar;
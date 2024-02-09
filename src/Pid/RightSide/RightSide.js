import "./RightSide.css" 
function RightSide(){
    return(
        <div class="rightbar">
            <div class="rightbar_title">
                <h4>Events</h4> 
                <a href="">See All</a>
            </div> 
            <div class="events"> 
                <div class="left_events">
                    <h3>11</h3>
                    <span>February</span>  
                </div>
                <div class="right_events">
                    <h7>Advanced Programming Lesson</h7>
                    <p><i class="material-icons">location_on</i>Bar Ilan University</p>
                    <p class="info">More Info</p>
                </div>
            </div>
            <div class="events"> 
            <div class="left_events">
                    <h3>18</h3>
                    <span>February</span>  
                </div>
                <div class="right_events">
                    <h7>Advanced Programming Lesson</h7>
                    <p><i class="material-icons">location_on</i>Bar Ilan University</p>
                    <p class="info">More Info</p>
                </div>
            </div>
            <div class="rightbar_title">
                <h4>Advertisments</h4> 
                <a href="">Close</a>
            </div> 
            <img src="https://www.monetizemore.com/wp-content/uploads/2020/10/What-are-HTML5-ads_.jpg" class="adpic"></img>
        </div>
    );
}
export default RightSide;
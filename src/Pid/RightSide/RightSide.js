import "./RightSide.css" 
function RightSide(){
    return(
        <div className="rightbar">
            <div className="rightbar_title">
                <h4>Events</h4> 
                <p>See All</p>
            </div> 
            <div className="events"> 
                <div className="left_events">
                    <h3>11</h3>
                    <span>February</span>  
                </div>
                <div className="right_events">
                    <h6>Advanced Programming Lesson</h6>
                    <p className="location"><i className="material-icons">location_on</i>Bar Ilan University</p>
                    <p className="info">More Info</p>
                </div>
            </div>
            <div className="events"> 
            <div className="left_events">
                    <h3>18</h3>
                    <span>February</span>  
                </div>
                <div className="right_events">
                    <h6>Advanced Programming Lesson</h6>
                    <p className="location"><i className="material-icons">location_on</i>Bar Ilan University</p>
                    <p className="info">More Info</p>
                </div>
            </div>
            <div className="rightbar_title">
                <h4>Advertisments</h4> 
                <p>Close</p>
            </div> 
            <img src="https://www.monetizemore.com/wp-content/uploads/2020/10/What-are-HTML5-ads_.jpg" className="adpic"></img>
        </div>
    );
}
export default RightSide;
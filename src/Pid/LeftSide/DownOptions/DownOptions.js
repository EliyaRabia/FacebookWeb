import "./DownOptions.css"
// this is the chat component
function DownOptions(){
    return (
      <div className="down_options">
        <div className="leftbar_title">
          <h4>Conversations</h4>
          <p className="hide">Hide Chat</p>
        </div>
        <div className="online-list">
          <div className="online">
            <img src="https://i.pinimg.com/736x/fa/60/51/fa6051d72b821cb48a8cc71d3481dfef.jpg"></img>
          </div>
          <p className="chat">Foo Bar</p>
        </div>
        <div className="online-list">
          <div className="online">
            <img src="https://i.pinimg.com/736x/fa/60/51/fa6051d72b821cb48a8cc71d3481dfef.jpg"></img>
          </div>
          <p className="chat">Bob Alice</p>
        </div>
        <div className="online-list">
          <div className="online">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg"></img>
          </div>
          <p className="chat">Mark Zuckerberg</p>
        </div>
      </div>
    );
}
export default DownOptions;
import React from "react";
import "./RightBar.scss";
import demoAvatar from "../../assets/demoAvatar.png";

function RightBar() {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img src={demoAvatar} alt="" />
              <span>Aaditya Jujagar</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>follow</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={demoAvatar} alt="" />
              <span>Aaditya Jujagar</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>follow</button>
            </div>
          </div>
        </div>

        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img src={demoAvatar} alt="" />
              <div className="userStatus">
                <span>Aaditya Jujagar</span>
                <p>changed their cover picture</p>
              </div>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={demoAvatar} alt="" />
              <div className="userStatus">
                <span>Aaditya Jujagar</span>
                <p>changed their cover picture</p>
              </div>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={demoAvatar} alt="" />
              <div className="userStatus">
                <span>Aaditya Jujagar</span>
                <p>changed their cover picture</p>
              </div>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={demoAvatar} alt="" />
              <div className="userStatus">
                <span>Aaditya Jujagar</span>
                <p>changed their cover picture</p>
              </div>
            </div>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img src={demoAvatar} alt="" />
              <div className="online" />
              <span>Aaditya Jujagar</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={demoAvatar} alt="" />
              <div className="online" />
              <span>Aaditya Jujagar</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={demoAvatar} alt="" />
              <div className="online" />
              <span>Aaditya Jujagar</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={demoAvatar} alt="" />
              <div className="online" />
              <span>Aaditya Jujagar</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={demoAvatar} alt="" />
              <div className="online" />
              <span>Aaditya Jujagar</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={demoAvatar} alt="" />
              <div className="online" />
              <span>Aaditya Jujagar</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={demoAvatar} alt="" />
              <div className="online" />
              <span>Aaditya Jujagar</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={demoAvatar} alt="" />
              <div className="online" />
              <span>Aaditya Jujagar</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={demoAvatar} alt="" />
              <div className="online" />
              <span>Aaditya Jujagar</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={demoAvatar} alt="" />
              <div className="online" />
              <span>Aaditya Jujagar</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={demoAvatar} alt="" />
              <div className="online" />
              <span>Aaditya Jujagar</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={demoAvatar} alt="" />
              <div className="online" />
              <span>Aaditya Jujagar</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightBar;

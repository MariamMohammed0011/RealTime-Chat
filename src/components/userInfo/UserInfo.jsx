import React from "react";
import "./UserInfo.css";
export default function UserInfo() {
  return (
    <div className="userInfo">
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>mariam</h2>
      </div>
      <div className="icons">
        <img src="./more.png" alt="" />
        <img src="./video.png" alt="" />
        <img src="./edit.png" alt="" />
      </div>
    </div>
  );
}

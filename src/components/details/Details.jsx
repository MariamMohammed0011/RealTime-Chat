import React from "react";
import "./Details.css";
export default function Details() {
  return (
    <div className="details">
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>mariam</h2>
        <p>
          Lorem ipsum dolor si
        </p>
      </div>

      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>

        

        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>

          <div className="photos">
            <div className="photoItem">
              <div className="photoDetails">
                <img
                  src="https://dotbadges.com/wp-content/uploads/2023/01/Panda-Sticker-510x510.webp"
                  alt=""
                />
                <span>photo_2025_2.png</span>
              </div>

              <img src="./download.png" alt="" className="icon" />
            </div>
            <div className="photoItem">
              <div className="photoDetails">
                <img
                  src="https://dotbadges.com/wp-content/uploads/2023/01/Panda-Sticker-510x510.webp"
                  alt=""
                />
                <span>photo_2025_2.png</span>
              </div>

              <img src="./download.png" alt="" className="icon" />
            </div>
            
          


          </div>
          
        </div>

        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        
        <button>Block User</button>
      </div>

    </div>
  );
}

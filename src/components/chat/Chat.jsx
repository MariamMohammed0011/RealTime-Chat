import React, { useState } from "react";
import "./Chat.css";
import EmojiPicker from 'emoji-picker-react'
export default function Chat() {
  const [open,setOpen]=useState(false)
  const [text,setText]=useState("")
  const handleEmoji=(e)=>{

setText((prev)=>prev + e.emoji);
// setOpen(false)

  }
  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="text">
            <span>mariam</span>
            <p>
              Lorem ipsum dolor sit amet,
            </p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>

      <div className="center">
        <div className="message">
          <img  src="./avatar.png" alt=''/>
          <div className="text">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A libero quam officiis quo? Hic voluptates quaerat tenetur. Dignissimos consequuntur velit, officiis</p>
         <span>1 min ago</span>
          </div>
        </div>


        <div className="message own">
         
          <div className="text">
            <img src='https://dotbadges.com/wp-content/uploads/2023/01/Panda-Sticker-510x510.webp' alt=""/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A libero quam officiis quo? Hic voluptates quaerat tenetur. Dignissimos consequuntur velit, officiis</p>
         <span>1 min ago</span>
          </div>
        </div>





        <div className="message">
          <img  src="./avatar.png" alt=''/>
          <div className="text">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A libero quam officiis quo? Hic voluptates quaerat tenetur. Dignissimos consequuntur velit, officiis</p>
         <span>1 min ago</span>
          </div>
        </div>



        <div className="message own">
         
          <div className="text">
          <img src='https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQAAFrR1Ooes4jZm4U-fweUqs8lsuo8rbbRWzF2dUuG8ugTs_WNYsEuD4x-dCSr_7Ep6gYC0VKDlC3QATbtCCSN99vpknaqAbQqFgaHO6ZITUZNy9vq1LIFqjc0cBgTKyAJn5Eyu68&usqp=CAc' alt=""/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A libero quam officiis quo? Hic voluptates quaerat tenetur. Dignissimos consequuntur velit, officiis</p>
         <span>1 min ago</span>
          </div>
        </div>








      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />{" "}
        </div>
        <input type="text" placeholder="Type a message..." value={text} onChange={(e)=>setText(e.target.value)}/>

        <div className="emoji">
          <img src="./emoji.png" onClick={()=>setOpen((open)=>(!open))} />
          <div className="picker">
            
         
          <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
        </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
}

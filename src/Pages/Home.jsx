import React from 'react'
import "../App.css"
import { RiImageAiLine } from "react-icons/ri";
import { RiImageAddLine } from "react-icons/ri";
import { BsChatLeft } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";

function Home(){
  return (
    <div className='home'>
      <nav>
        <div className="logo">
            Smart AI Bot
        </div>
      </nav>
      <div className="hero">
        <span id="tag">What Can I Help with ?</span>
        <div className="cate">
            <div className="upImg">
            <RiImageAddLine />
            <span>Upload Image</span>
            </div>
            <div className="genImg">
            <RiImageAiLine />
            <span>Generate Image</span>
            </div>
            <div className="chat">
            <BsChatLeft />
            <span>Let's Chat</span>
            </div>
        </div>
      </div>

     <form className="input-box">
    <button id="add">
    <FaPlus />
    </button>
    <input type="text" placeholder='Ask Something...'/>
    <button id="submit">
    <FaArrowUp />
    </button>
     </form>

    </div>
  )
}

export default Home

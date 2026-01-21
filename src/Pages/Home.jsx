import React, { useContext } from 'react'
import "../App.css"
import { RiImageAiLine } from "react-icons/ri";
import { RiImageAddLine } from "react-icons/ri";
import { BsChatLeft } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";
import { dataContext } from '../context/userContext';
import Chat from './chat';


function Home(){
let {startRes,setStartRes,popUp,setPopUP}=useContext(dataContext)
async function handleSubmit(e){
e.preventDefault()
setStartRes(true)
}
  return (
    <div className='home'>
      <nav>
        <div className="logo">
            Smart AI Bot
        </div>
      </nav>

      {!startRes ? 
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
  </div>:
  <Chat/>
 }

      

     <form className="input-box" onSubmit={(e)=>handleSubmit(e)}>
        <div className="pop-up">
        <div className="select-up">
        <RiImageAddLine />
        <span>Upload Image</span>
        </div>
        <div className="select-gen">
        <RiImageAiLine />
        <span>Generate Image</span>
        </div>
        </div>
    <button id="add" onClick={()=>{
        setPopUP(prev=>!prev)
    }}>
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

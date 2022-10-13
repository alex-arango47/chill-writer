import React from 'react'
import { useState } from 'react'
import './sidebar.css'

const Sidebar = () => {

  const [style, setStyle] = useState("sidebar-Btn")
  const [messages, setMessages] = useState("")
  const [menuState, setMenuState] = useState(0)

  const handleClick = () => {
    if(menuState === 0){
      setMenuState(1)
      setStyle("sidebar-Btn_Click")
    } else {
      setMenuState(0)
      setStyle("sidebar-Btn")
    }
  }

  const handleMenu = () => {
    let dropMenu = document.querySelector("#messageMenu-Container")
    let messageList = []
    if(dropMenu.classList.contains("hide")){
      dropMenu.classList.remove("hide")
      dropMenu.classList.add("messageMenu-Container")
    } else {
      dropMenu.classList.remove("messageMenu-Container")
      dropMenu.classList.add("hide")
    }
    if(localStorage.getItem("messages")){
      messageList.push(JSON.parse(localStorage.getItem("messages")))
      setMessages(messageList)
    } else {
      messages !== "There are no saved messages." ? setMessages("There are no saved messages.") : setMessages()
    }
  }

  const handleSidebarChange = () => {
    handleClick()
    handleMenu()
  }

  return (
    <>
      <div className="sidebar-Container">
        <button id="sidebar-Btn" className={style} onClick={handleSidebarChange}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
      </div>
      <div className='hide' id='messageMenu-Container'>
        <h1>{messages}</h1>
      </div>
    </>
  )
}

export default Sidebar
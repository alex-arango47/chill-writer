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

  let messageList = []

  const handleMenu = () => {
    let dropMenu = document.querySelector("#messageMenu-Container")
    if(dropMenu.classList.contains("hide")){
      dropMenu.classList.remove("hide")
      dropMenu.classList.add("messageMenu-Container")
    } else {
      dropMenu.classList.remove("messageMenu-Container")
      dropMenu.classList.add("hide")
    }
    if(localStorage.getItem("messages")){
      messageList.push(JSON.parse(localStorage.getItem("messages")))
      setMessages(messageList[0].map((msg) => <p className='messageMenu-Text'>{msg}</p>))
      // return (
      //   messageList[0].map((msg) => <h1>{msg}</h1>)
      // )
    } else {
      messages !== <p className='messageMenu-Text'>There are no saved messages.</p> ? setMessages(<p className='messageMenu-Text'>There are no saved messages.</p>) : setMessages()
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
        {messages}
      </div>
    </>
  )
}

export default Sidebar
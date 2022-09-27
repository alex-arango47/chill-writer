import React from 'react'
import { useState } from 'react'
import './sidebar.css'
import DropMenu from './DropMenu'

const Sidebar = () => {

  const [style, setStyle] = useState("sidebar-Btn")
  const [menu, setMenu] = useState("")

  const handleClick = () => {
    style === "sidebar-Btn" ? setStyle("sidebar-Btn_Click") : setStyle("sidebar-Btn")
    menu === "" ? setMenu(DropMenu) : setMenu("")
  }

  return (
    <>
      <div className="sidebar-Container">
        <button id="sidebar-Btn" className={style} onClick={handleClick}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
      </div>
      {menu}
    </>
  )
}

export default Sidebar
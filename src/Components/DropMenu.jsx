import React from 'react'
import './dropMenu.css'

const DropMenu = () => {
  return (
    <>
        <div className='dropMenu-Container'>
            <p>{localStorage.getItem(1)}</p>
        </div>
    </>
  )
}

export default DropMenu
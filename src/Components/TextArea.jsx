import React from 'react'
import {useState} from 'react'
import {useEffect} from 'react'
import './textArea.css'
import './saveReset.css'

const TextArea = () => {

    const [message, setMessage] = useState('')

    const handleMessageChange = event => {
        setMessage(event.target.value)
    }

    const handleMessageReset = () => {
        setMessage("")
    }

    const handleMessageSave = () => {
        const fileData = JSON.stringify(message);
        const blob = new Blob([fileData], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        let date = new Date()
        date = date.toDateString()
        link.download = `My note created on ${date} with Chill typer`;
        link.href = url;
        link.click();
    }

    return (
        <>
            <textarea className='textArea' placeholder='Type something...' autoFocus value={message} onChange={handleMessageChange}></textarea>
            <div className='saveReset-Container'>
                <button className='saveReset-Btn' onClick={handleMessageReset}>Reset</button>
                <button className='saveReset-Btn' onClick={handleMessageSave}>Save</button>
            </div>
            <div className='savedContent-Container'>
                
            </div>
        </>
    )
}

export default TextArea
import React from 'react'
import {useState} from 'react'
import './textArea.css'
import './saveReset.css'
// import Sidebar from './Sidebar' -- W.I.P --

const TextArea = () => {

    const [message, setMessage] = useState('')

    const handleMessageChange = event => {
        setMessage(event.target.value)
    }

    const handleMessageReset = () => {
        setMessage('')
    }


    const handleMessageSave = () => {
        if (message === ""){
            return alert("The message can't be empty.")
        }
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


        // ---------- W.I.P ----------
    // const handleMessageSave = () => {
    //     let messageStorage = message
    //     if (messageStorage === ""){
    //         return alert("The message can't be empty.")
    //     }
    //     let storageCount = Number(localStorage.getItem("counter"))
    //     storageCount = storageCount + 1
    //     localStorage.setItem("counter", Number(storageCount))
    //     localStorage.setItem(storageCount, messageStorage)
    // }
    // -----------------------------------------------------------------------------

    return (
        <>
            <textarea className='textArea' placeholder='Type something...' autoFocus value={message} onChange={handleMessageChange}></textarea>
            <div className='saveReset-Container'>
                <button className='saveReset-Btn' onClick={handleMessageReset}>Clear</button>
                <button className='saveReset-Btn' onClick={handleMessageSave}>Save</button>
            </div>
            {/* <Sidebar /> W.I.P */}
        </>
    )
}

export default TextArea
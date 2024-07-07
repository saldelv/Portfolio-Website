import React, { useState } from 'react'
import '../styles/themes.css'

function Themes() {

    const [open, setOpen] = useState(false)

    return (
        <div className='themes' id={open ? "open" : "close"}>
            <button onClick={() => setOpen(!open)}>
                <p>Themes</p>
            </button>
            <div className='openThemes'>
                opened
            </div>
        </div>
    );
}

export default Themes
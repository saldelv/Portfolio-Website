import React, { useState } from 'react'
import '../styles/themes.css'

const themeColors = [
    {
        color: '#667db8'
    },
    {
        color: 'white'
    },
    {
        color: '#515151'
    },
    {
        color: '#66b883'
    },
    {
        color: '#b95252'
    },
    {
        color: '#9966b8'
    }
]

function Themes() {

    const [open, setOpen] = useState(false)

    return (
        <div className='themes' id={open ? "open" : "close"}>
            <div className = "barButton">
                <button onClick={() => setOpen(!open)}>
                    <p>Themes</p>
                </button>
            </div>
            <div className='openThemes'>
                <div className='grid'>
                    {themeColors.map((themeColor, key) => {
                        return (
                        <div className="color">
                            <button style={{backgroundColor:`${themeColor.color}`}}>
                                <p>color</p>
                            </button>
                        </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Themes
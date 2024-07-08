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
        color: '#3a3a3a'
    },
    {
        color: '#66b883'
    },
    {
        color: '#e57d7d'
    },
    {
        color: '#9966b8'
    }
]

function Themes() {

    const [open, setOpen] = useState(false);
    const [backColor, setBackColor] = useState('#667db8');

    function setColor(color) {
        setBackColor(color);
        document.body.style.backgroundColor = color;
        setOpen(!open);
    }

    return (
        <div className='themes' id={open ? "open" : "close"}>
            <div className = "barButton">
                <button onClick={() => setOpen(!open)} style={{backgroundColor:`${backColor}`}}>
                    <p>Themes</p>
                </button>
            </div>
            <div className='openThemes'>
                <div className='grid'>
                    {themeColors.map((themeColor, key) => {
                        return (
                        <div className="color">
                            <button onClick={() => setColor(themeColor.color)} style={{backgroundColor:`${themeColor.color}`}}>
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
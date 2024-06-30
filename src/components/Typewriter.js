import React, { useState, useEffect } from 'react';

const Typewriter = ({texts, delay, repeat}) => {
    const [currentText, setCurrentText] = useState('');
    const [currentDelay, setCurrentDelay] = useState(delay);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentDirection, setCurrentDirection] = useState(false)
    const [currentLine, setCurrentLine] = useState(0)


    useEffect(() => {
        const timeout = setTimeout(() => {
            if (currentIndex < texts[currentLine].length && currentDirection == false) {
                setCurrentText(prevText => prevText + texts[currentLine][currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
                if (currentDelay != delay) {
                    setCurrentDelay(delay)
                }
                if (currentIndex >= texts[currentLine].length - 1) {
                    setCurrentDelay(3000);
                }
            }
            else if (currentIndex > 0 && repeat == true) {
                if (currentDirection == false) {
                    setCurrentDirection(true);
                    setCurrentDelay(delay);
                }
                setCurrentText(prevText => prevText.substring(0, prevText.length-1));
                setCurrentIndex(prevIndex => prevIndex - 1);
            }
            else if (repeat == true) {
                setCurrentDirection(false);
                setCurrentDelay(3000);
                if (currentLine == texts.length - 1) {
                    setCurrentLine(0);
                }
                else {
                    setCurrentLine(prevLine => prevLine + 1);
                }
            }
        }, currentDelay);
        return () => clearTimeout(timeout);
    }, [currentIndex, currentDirection, currentLine, delay, texts]);

    return <span>{currentText}</span>
}

export default Typewriter;
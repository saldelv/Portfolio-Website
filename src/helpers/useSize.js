<<<<<<< HEAD
import { useEffect, useState } from "react";

const useSize = () => {
    const [windowSize, setWindowSize] = useState([
        window.innerWidth, window.innerHeight
    ]);

    useEffect(() => {
        const windowSizeHandler = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);
        };
        window.addEventListener("resize", windowSizeHandler);

        return () => {
            window.removeEventListener("resize", windowSizeHandler);
        };
    }, []);

    return windowSize;
};

=======
import { useEffect, useState } from "react";

const useSize = () => {
    const [windowSize, setWindowSize] = useState([
        window.innerWidth, window.innerHeight
    ]);

    useEffect(() => {
        const windowSizeHandler = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);
        };
        window.addEventListener("resize", windowSizeHandler);

        return () => {
            window.removeEventListener("resize", windowSizeHandler);
        };
    }, []);

    return windowSize;
};

>>>>>>> 27b33ec851b2a2c5a6d9ee7dee1c3e5ce2fee5ed
export default useSize
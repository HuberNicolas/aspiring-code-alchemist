import { useEffect, useRef } from 'react';
import Typed from "typed.js";
function Typewriter({sentences}) {

    const typedRef = useRef(null);

    useEffect(() => {
        const options = {
            strings: sentences,
            typeSpeed: 50, // typing speed in milliseconds
            backSpeed: 50, // backspacing speed in milliseconds
            loop: true, // repeat the sentences
            loopCount: Infinity, // number of loops (Infinity for infinite loop)
        };

        const typed = new Typed(typedRef.current, options);

        return () => {
            typed.destroy(); // cleanup on unmount
        };
    }, [sentences]);

    return <span ref={typedRef} />;
}

export default Typewriter

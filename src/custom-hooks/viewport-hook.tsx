import { useState, useEffect } from "react";

export const useViewport = () => {
    const [ isMobile, setIsMobile ] = useState(false);
    const breakpoint = 768;

    useEffect(() => {        
        const handleWindowResize = () => { 
            if (window.innerWidth < breakpoint ) {
                setIsMobile(true)
            } else {
                setIsMobile(false)
            }
        };
        window.addEventListener("resize", handleWindowResize);
        
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return { isMobile, setIsMobile }
}
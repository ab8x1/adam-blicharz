import { useState, useEffect, cloneElement } from "react";

const IsMobile = Component => () => {
    const [isMobile, setIsMobile] = useState();
    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);

    return(
        <>{isMobile !== undefined && <Component isMobile={isMobile}/>}</>
    )
}

export default IsMobile;
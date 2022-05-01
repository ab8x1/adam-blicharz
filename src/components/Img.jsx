import { useState } from "react";
import Image from "next/image";

export default function Img({...props}){
    const [isReady, setIsReady] = useState(false);

    const onLoaded = () => {
        setIsReady(true);
    }

    return(
        <div style={{opacity: isReady ? 1 : 0, transition: 'opacity 0.2s ease-in-out', display: 'flex'}}>
            <Image
                onLoadingComplete={onLoaded}
                {...props}
            />
        </div>
    )
}
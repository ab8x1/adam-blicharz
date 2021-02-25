import {createContext, useState, useEffect} from 'react';
import { useRouter } from 'next/router';
import cacheScroll from '../helpers/scrollRestoration';

export const GlobalContext = createContext(false);

const App = ({children}) => {
    const [indexScroll, setIndexScroll] = useState(0);
    const router = useRouter();
    cacheScroll(router);
    return(
        <GlobalContext.Provider value={{ indexScroll, setIndexScroll }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default App;
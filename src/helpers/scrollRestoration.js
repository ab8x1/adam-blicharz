import {useEffect} from 'react';

let cachedScroll = {};
let shouldScroll = false;

const cacheScroll = (router) => {
    useEffect( () => {

        const handleRouteChangeStart = (url) => {
            cachedScroll[`/${router.locale}${router.asPath}`] = window.scrollY;
        }
        router.events.on('routeChangeStart', handleRouteChangeStart);

        const handleRouteChangedComplete = (url) => {
            if(shouldScroll){
                console.log('should restore');
                shouldScroll = false;
                window.scrollTo(0, cachedScroll[`${url}/`] || 0);
            }
        }
        router.events.on('routeChangeComplete', handleRouteChangedComplete);

        router.beforePopState( () => {
            shouldScroll = true;
            return true;
        });

        return () => {
            router.events.off('routeChangeStart', handleRouteChangeStart);
            router.events.off('routeChangeComplete', handleRouteChangedComplete);
        }
    }, [router]);
}

export default cacheScroll;
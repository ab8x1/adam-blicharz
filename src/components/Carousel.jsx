import {useContext, useEffect, useState, memo, useRef} from 'react';
import {GlobalContext} from'./App';
import {CarouselContainer, CarouselContent, Item, Arrow, Dots, Dot} from '../styles/carouselStyles'
import Image from 'next/image'

let isScrolling, currentXPosition=0;

// create memo for items, because they don't change as often as Carousele(arrows, dot's change constantly)
const ItemsMemo = memo(({items, sizes}) => {
    return(
        <>
            {
                items.map((item, i) =>
                    <Item key={`item.${i}`} sizes={sizes}>
                        {item}
                    </Item>
                )
            }
        </>
    )
})

//detect when user stopped scrolling
function onScrollEnd(scrollLeft, scrollnextProjext){
    clearTimeout( isScrolling );
     //if scroll was performed with arrows don't watch for scrollEnd
     if(scrollLeft !== currentXPosition) isScrolling = setTimeout(function() {
        const forth = scrollLeft > currentXPosition;
        scrollnextProjext(forth);
    }, 400);
}

// follow scroll change - moved outside component to avoid rerendering
function followScroll(element, setActiveBack, setActiveForth, scrollnextProjext){
    const {target} = element;
    const {scrollLeft, offsetWidth, scrollWidth} = target;
    onScrollEnd(scrollLeft, scrollnextProjext); //if user stops scrolling move to next nearest project

    //when checinkg dots cosider moving this logic there
    setActiveBack(scrollLeft > 0); //activate back arrow
    setActiveForth(offsetWidth + scrollLeft < scrollWidth - 10); //activate back arrow
}

function Carousel({items, sizes}){
    const sortedSizes = sizes.sort((a, b) => a.size - b.size); //sort sizes from smallest to biggest
    const contentRef = useRef();    //items container
    const [activeBack, setActiveBack] = useState(false); //is back arrow active
    const [activeForth, setActiveForth] = useState(true);  //is forth arrow active
    const [activeDot, setActiveDot] = useState();

    const scrollnextProjext = forth => {
        const element = contentRef.current;
        const {columns} = [...sortedSizes].reverse().find(({size}) => window.innerWidth >= size); //get num of columns for actual window size
        const contentWidth = parseInt(element.offsetWidth / columns); //get exact content width for actual window size
        const variation = element.scrollLeft % contentWidth; //get distance between actual scroll position and container edge
        let distance = forth ? contentWidth - variation : variation || contentWidth; //get distance to move
        let newPosition; //declare new desired position
        if(forth) newPosition = element.scrollLeft + distance;
        else newPosition = element.scrollLeft - distance;
        currentXPosition = newPosition;
        element.scrollLeft = newPosition;
    }

    useEffect(() => {
        const {current} = contentRef;
        current.addEventListener('scroll', element => followScroll(element, setActiveBack, setActiveForth, scrollnextProjext));
        return () => {
            current.removeEventListener('scroll', followScroll);
        }
    }, [])

    return(
        <CarouselContainer style={{position: 'relative'}}>
            <Arrow onClick={() => scrollnextProjext(false)} disabled={!activeBack}>
                <Image src="/chevron.png" width={40} height={40}/>
            </Arrow>
            <Arrow onClick={() => scrollnextProjext(true)} forth disabled={!activeForth}>
                <Image src="/chevron.png" width={40} height={40}/>
            </Arrow>
            <CarouselContent ref={contentRef}>
               <ItemsMemo items={items} sizes={sizes}/>
            </CarouselContent>
            <Dots>
                {Array.from(Array(items.length).keys()).map(i => <Dot key={i}/>)}
            </Dots>
        </CarouselContainer>

    )
}

export default Carousel;
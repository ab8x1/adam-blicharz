import {useEffect, useState, memo, useRef} from 'react';
import {CarouselContainer, CarouselContent, Item, Arrow, Dots, Dot} from '../styles/carouselStyles'
import Image from 'next/image'

let isScrolling, currentXPosition=0;

// create memo for items, because they don't change as often as Carousele(arrows/dot's change constantly)
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
     //if scroll was performed with arrows or dot's don't watch for scrollEnd
     if(scrollLeft !== currentXPosition)
     isScrolling = setTimeout(function() {
        const forth = scrollLeft > currentXPosition;
        scrollnextProjext(forth);
    }, 200);
}

// follow scroll change - moved outside component to avoid rerendering
function followScroll(element, scrollnextProjext){
    const {target} = element;
    const {scrollLeft} = target;
    onScrollEnd(scrollLeft, scrollnextProjext); //if user stops scrolling move to next nearest project
}

function getContentWidth(sortedSizes, elementWidth){
    const {columns} = [...sortedSizes].reverse().find(({size}) => window.innerWidth >= size); //get num of columns for actual window size
    return parseInt(elementWidth / columns); //get exact content width for actual window size
}

function Carousel({items, sizes}){
    const sortedSizes = sizes.sort((a, b) => a.size - b.size); //sort sizes from smallest to biggest
    const contentRef = useRef();    //items container
    const [activeBack, setActiveBack] = useState(false); //is back arrow active
    const [activeForth, setActiveForth] = useState(true);  //is forth arrow active
    const [activeDot, setActiveDot] = useState(0);

    const scrollToNearestDot = forth => {
        const projectsContainer = contentRef.current;
        const {offsetWidth, scrollLeft} = projectsContainer;
        const contentWidth = getContentWidth(sortedSizes, offsetWidth); //get exact content width for actual window size;
        const nearestDot = parseInt(scrollLeft / contentWidth);
        const targetoDot = forth ? nearestDot + 1 : nearestDot;
        scrollToDot({target: {value: targetoDot}})
    }

    const scrollToDot = ({target}) => {
        const {value} = target;
        let dot = value === 'forth' ? activeDot + 1 : value === 'back' ? activeDot - 1 : value;
        dot = dot < 0 ? 0 : dot > items.length - 1 ? items.length - 1 : dot;
        const projectsContainer = contentRef.current;
        const {offsetWidth, scrollWidth} = projectsContainer;
        const contentWidth = getContentWidth(sortedSizes, offsetWidth); //get exact content width for actual window size;
        const newPosition = dot * contentWidth;
        const maxLeft = scrollWidth - offsetWidth;
        const scrollTo = newPosition < maxLeft ? newPosition : maxLeft;
        projectsContainer.scrollLeft = scrollTo;
        currentXPosition = scrollTo;
        setActiveBack(dot > 0);
        setActiveForth(dot < items.length - 1);
        setActiveDot(Number(dot));
    }

    useEffect(() => {
        const {current} = contentRef;
        current.addEventListener('scroll', element => followScroll(element, scrollToNearestDot));
        return () => {
            current.removeEventListener('scroll', followScroll);
        }
    }, [])

    return(
        <CarouselContainer style={{position: 'relative'}}>
            <Arrow value="back" onClick={scrollToDot} disabled={!activeBack}>
                <Image src="/chevron.png" width={40} height={40}/>
            </Arrow>
            <Arrow value="forth" onClick={scrollToDot} forth disabled={!activeForth}>
                <Image src="/chevron.png" width={40} height={40}/>
            </Arrow>
            <CarouselContent ref={contentRef} active={activeDot + 1}>
               <ItemsMemo items={items} sizes={sizes}/>
            </CarouselContent>
            <Dots>
                {Array.from(Array(items.length).keys()).map(i => <Dot value={i} onClick={scrollToDot} active={i === activeDot} key={i}/>)}
            </Dots>
        </CarouselContainer>

    )
}

export default Carousel;
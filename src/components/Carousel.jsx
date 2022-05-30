import {useEffect, useState, useRef} from 'react';
import {CarouselContainer, CarouselContent, Arrow, Dots, Dot} from '../styles/carouselStyles'
import Image from 'next/image';
import {followScroll, getContentWidth} from '../helpers/carouseleHelpers';
import ItemsMemo from '../components/ItemsMemo';

let currentXPosition={val: 0}, currentDot={val:0};

function Carousel({items, sizes, indexScroll, setIndexScroll}){
    const contentRef = useRef(); //items container
    const {lastCurrentDot, returnedFrom, lastSavedDir} = indexScroll || {};
    const [sortedSizes] = useState(sizes.sort((a, b) => a.size - b.size)); //sort sizes from smallest to biggest
    const [activeBack, setActiveBack] = useState(false); //is back arrow active
    const [activeForth, setActiveForth] = useState(true);  //is forth arrow active
    const [activeDot, setActiveDot] = useState(returnedFrom || 0);

    useEffect(() => {
        const {current} = contentRef;
        current.addEventListener('scroll', element => followScroll(element, sortedSizes, scrollToDot, currentXPosition));
        current.style.scrollBehavior = "auto";
        const lastForth = returnedFrom !== lastCurrentDot ? returnedFrom > lastCurrentDot : lastSavedDir; //last direction of slides
        currentDot.lastForthDirection = lastForth;
        scrollToDot({target: {value: returnedFrom || 0}, initial: true, lastForth});
        current.style.scrollBehavior = "smooth";
        return () => {
            current.removeEventListener('scroll', followScroll);
        }
    }, [])

    const scrollToDot = ({target, initial, lastForth}) => {
        const {value} = target;
        let dot = value === 'forth' ? activeDot + 1 : value === 'back' ? activeDot - 1 : value;
        dot = Number(dot < 0 ? 0 : dot > items.length - 1 ? items.length - 1 : dot);
        const projectsContainer = contentRef.current;
        const {offsetWidth, scrollWidth} = projectsContainer;
        const {contentWidth, columns} = getContentWidth(sortedSizes, offsetWidth); //get exact content width for actual window size;
        let newPosition = dot * contentWidth;
        const maxLeft = scrollWidth - offsetWidth;
        const newIsInView = newPosition >= projectsContainer.scrollLeft && ((newPosition+contentWidth) <= (projectsContainer.scrollLeft + offsetWidth));
        if(!newIsInView || initial){ //scroll only if new Project isn't in viewport
            if(!initial){
                if(dot > activeDot && columns > 1) newPosition = newPosition - contentWidth;
            }
            else if(lastForth && columns > 1){
                newPosition = newPosition - contentWidth;
            }
            newPosition = newPosition < maxLeft ? newPosition : maxLeft;
            projectsContainer.scrollLeft = newPosition;
        }
        currentXPosition.val = newPosition;
        currentDot.val = dot;
        if(dot !== activeDot) currentDot.lastForthDirection = dot > activeDot;
        setActiveBack(dot > 0);
        setActiveForth(dot < items.length - 1);
        setActiveDot(dot);
    }

    return(
        <CarouselContainer style={{position: 'relative'}}>
            <Arrow value="back" onClick={scrollToDot} disabled={!activeBack}>
                <Image src="/chevron.png" width={40} height={40}/>
            </Arrow>
            <Arrow value="forth" onClick={scrollToDot} forth disabled={!activeForth}>
                <Image src="/chevron.png" width={40} height={40}/>
            </Arrow>
            <CarouselContent ref={contentRef} active={activeDot + 1}>
               <ItemsMemo items={items} sizes={sizes} setIndexScroll={setIndexScroll} currentDot={currentDot}/>
            </CarouselContent>
            <Dots>
                {Array.from(Array(items.length).keys()).map(i => <Dot value={i} onClick={scrollToDot} active={i === activeDot} key={i}/>)}
            </Dots>
        </CarouselContainer>

    )
}

export default Carousel;
import {useContext, useEffect, useState, memo, useRef} from 'react';
import {GlobalContext} from'./App';
import {CarouselContainer, Item} from '../styles/carouselStyles'
import Image from 'next/image'

let isScrolling, lastXPosition=0, intendedPosition;

function Carousel({items}){
    const contentRef = useRef();
    const {indexScroll} = useContext(GlobalContext);
    const {xPos} = indexScroll || {};
    const [activeBack, setActiveBack] = useState(xPos > 0);
    const [activeForth, setActiveForth] = useState(true);

    useEffect(() => {
        const {current} = contentRef;
        current.style.scrollBehavior = 'auto';
        current.scrollLeft = xPos || 0;
        current.style.scrollBehavior = 'smooth';
        current.addEventListener('scroll', followScroll);
        return () => {
            current.removeEventListener('scroll', followScroll);
        }
    }, [])

    const followScroll = el => {
        clearTimeout( isScrolling );
        if(el.target.scrollLeft !== intendedPosition)
        isScrolling = setTimeout(function() {
            const forth = el.target.scrollLeft > lastXPosition;
            scrollnextProjext(forth);
        }, 400);
        setActiveBack(el.target.scrollLeft > 0);
        setActiveForth(el.target.offsetWidth + el.target.scrollLeft < el.target.scrollWidth - 10);
    }

    const scrollnextProjext = forth => {
        const element = contentRef.current;
        const contentWidth = parseInt(element.offsetWidth / (window.innerWidth >= 992 ? 2 : 1));
        const variation = element.scrollLeft % (contentWidth);
        let distance = forth ? contentWidth - variation : variation || contentWidth;
        let newPosition;
        //if user scrolls beyond last content box, return to prevoius one
        if(!activeForth && variation > 0 && variation < 10) distance += contentWidth;
        if(forth){
            const newDistance = element.scrollLeft + element.offsetWidth + distance;
            if(element.scrollWidth - newDistance > 0 && element.scrollWidth - newDistance < 10) newPosition = element.scrollWidth;
            else newPosition = element.scrollLeft + distance;
        }
        else newPosition = element.scrollLeft - distance;
        intendedPosition = newPosition;
        lastXPosition = newPosition;
        element.scrollLeft = newPosition;
    }

    return(
        <CarouselContainer ref={contentRef}>
            <Arrow onClick={() => scrollnextProjext(false)} disabled={!activeBack}>
                <Image src="/chevron.png" width={64} height={64}/>
            </Arrow>
            <Arrow onClick={() => scrollnextProjext(true)} forth disabled={!activeForth}>
                <Image src="/chevron.png" width={64} height={64}/>
            </Arrow>
            {
                items.map(item =>
                    <Item>
                        {item}
                    </Item>
                )
            }
        </CarouselContainer>
    )
}
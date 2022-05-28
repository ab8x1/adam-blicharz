import {useEffect, useState, memo, useRef} from 'react';
import {CarouselContainer, CarouselContent, Item, Arrow, Dots, Dot} from '../styles/carouselStyles'
import {Button, Project, ProjectImg} from '../styles/projectsStyles';
import Image from 'next/image';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import {followScroll, getContentWidth} from '../helpers/carouseleHelpers';
import {gradients} from '../consts/gradients';

let currentXPosition=0, currentDot=0;

// create memo for items, because they don't change as often as Carousele(arrows/dot's change constantly)
const ItemsMemo = memo(({items, sizes, setIndexScroll}) => {
    const { t } = useTranslation('common');
    const router = useRouter();
    const viewProject = ({target}) =>{
        const yPos = window.scrollY;
        router.push(`/projects/[project]` ,`/projects/${target.value}`).then(() => {
            window.scrollTo(0, 0);
            setIndexScroll({yPos, currentDot});
        });
    }
    return(
        <>
            {
                items.map(({name, route, description, icon}, i) =>
                    <Item key={`item.${i}`} sizes={sizes}>
                        <Project style={{backgroundImage: gradients[i]}}>
                            <ProjectImg> <Image src={icon} width={52} height={52}/> </ProjectImg>
                            <div>
                                <h2>{name}</h2>
                                <p>{description.substr(0, 250)}<b>[...]</b></p>
                            </div>
                            <Button value={route} onClick={viewProject}>{t('Details')}</Button>
                        </Project>
                    </Item>
                )
            }
        </>
    )
})


function Carousel({items, sizes, indexScroll, setIndexScroll}){
    const contentRef = useRef();    //items container
    const [sortedSizes] = useState(sizes.sort((a, b) => a.size - b.size)); //sort sizes from smallest to biggest
    const [activeBack, setActiveBack] = useState(false); //is back arrow active
    const [activeForth, setActiveForth] = useState(true);  //is forth arrow active
    const [activeDot, setActiveDot] = useState(indexScroll?.currentDot || 0);

    useEffect(() => {
        const {current} = contentRef;
        current.addEventListener('scroll', element => followScroll(element, sortedSizes, scrollToDot, currentXPosition));
        current.style.scrollBehavior = "auto";
        scrollToDot({target: {value: indexScroll?.currentDot || 0}});
        current.style.scrollBehavior = "smooth";
        return () => {
            current.removeEventListener('scroll', followScroll);
        }
    }, [])

    const scrollToDot = ({target}) => {
        const {value} = target;
        let dot = value === 'forth' ? activeDot + 1 : value === 'back' ? activeDot - 1 : value;
        dot = Number(dot < 0 ? 0 : dot > items.length - 1 ? items.length - 1 : dot);
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
        setActiveDot(dot); currentDot=dot;
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
               <ItemsMemo items={items} sizes={sizes} setIndexScroll={setIndexScroll}/>
            </CarouselContent>
            <Dots>
                {Array.from(Array(items.length).keys()).map(i => <Dot value={i} onClick={scrollToDot} active={i === activeDot} key={i}/>)}
            </Dots>
        </CarouselContainer>

    )
}

export default Carousel;
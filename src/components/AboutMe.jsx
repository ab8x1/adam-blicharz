import {useContext} from 'react';
import {GlobalContext} from'./App';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {Wrapper, Title, ImageConatiner} from '../styles/aboutMeStyles';

const stagger = {
    hidden: {},
    show: {
        transition: { delayChildren: 0.3, staggerChildren: 0.2 }
    }
}

const fadeText = {
    hidden: {
        y: -40,
        opacity: 0
    },
    show: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", damping: 12, stiffness: 100, duration: 0.02}
    }
}

const fadePhoto = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { duration: 0.5, ease: "easeInOut", delay: 0.8 }
    }
}

const AboutMe = () => {
    const {indexScroll} = useContext(GlobalContext);
    return(
        <Wrapper className="container"variants={stagger} initial={indexScroll ? 'show' : 'hidden'} animate='show'>
            <div style={{overflow: 'hidden'}}>
                <Title variants={fadeText}>
                    Adam Blicharz
                </Title>
            </div>
            <div style={{overflow: 'hidden'}}>
                <Title variants={fadeText}>
                    Fullstack JavaScript Developer
                </Title>
            </div>
            <ImageConatiner variants={fadePhoto}> 
                <Image priority src="/me-450w.jpg" width={450} height={478}/>
            </ImageConatiner>
        </Wrapper>
    )
}

export default AboutMe;
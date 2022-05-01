import {useContext} from 'react';
import {GlobalContext} from'./App';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {Wrapper, InfoText, ImageConatiner, VisualInfo} from '../styles/aboutMeStyles';
import StackVisual from './StackVisual';

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
        <Wrapper className="container" variants={stagger} initial={indexScroll ? 'show' : 'hidden'} animate='show'>
            <InfoText>
                <div style={{overflow: 'hidden'}}>
                    <motion.h1 variants={fadeText}>
                        Adam Blicharz
                    </motion.h1>
                </div>
                <div style={{overflow: 'hidden'}}>
                    <motion.h2 variants={fadeText}>
                        Fullstack JavaScript Developer
                    </motion.h2>
                </div>
            </InfoText>
            <VisualInfo>
                <ImageConatiner variants={fadePhoto}>
                    <Image priority src="/me.jpg" layout="fill" objectFit="cover" objectPosition="center" alt="Adam Blicharz"/>
                </ImageConatiner>
                <StackVisual/>
            </VisualInfo>
        </Wrapper>
    )
}

export default AboutMe;
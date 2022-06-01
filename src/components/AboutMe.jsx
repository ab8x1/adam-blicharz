import {useContext} from 'react';
import {GlobalContext} from'./App';
import { motion } from 'framer-motion';
import {Wrapper, InfoText, VisualInfo} from '../styles/aboutMeStyles';
import StackVisual from './StackVisual';

const stagger = {
    hidden: {},
    show: {
        transition: { delayChildren: 0.3, staggerChildren: 0.3 }
    }
}

const fadeText = {
    hidden: {
        y: 40,
        opacity: 0
    },
    show: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", damping: 12, stiffness: 100, duration: 0.02}
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
                <StackVisual disableAnimation={indexScroll}/>
            </VisualInfo>
        </Wrapper>
    )
}

export default AboutMe;
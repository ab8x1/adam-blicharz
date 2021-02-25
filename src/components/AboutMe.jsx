import {useContext} from 'react';
import {GlobalContext} from'./App';
import { motion } from 'framer-motion';
import {AboutMeSection, Wrapper, Title, Image} from '../styles/aboutMeStyles';

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
        <AboutMeSection>
            <Wrapper className="container">
                <motion.div variants={stagger} initial={indexScroll ? 'show' : 'hidden'} animate='show'>
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
                    <Image variants={fadePhoto}
                        srcSet="/me-220w.jpg 220w,
                                /me-450w.jpg 450w"
                        sizes="(max-width: 991px) 220px,
                                450px"
                        src="/me-450w.jpg"
                        alt="Adam Blicharz"
                    />
                </motion.div>
            </Wrapper>
        </AboutMeSection>
    )
}

export default AboutMe;
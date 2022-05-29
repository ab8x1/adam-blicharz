import {useContext, useState, useRef} from 'react';
import {GlobalContext} from'./App';
import useTranslation from 'next-translate/useTranslation';
import {motion} from 'framer-motion';
import styled from 'styled-components';
import { Element } from 'react-scroll';
import {useIntersection} from '../helpers/intersectionObserver';

const GitHubBackground = styled(Element)`
    padding: 85px 0;
    background-color: rgb(56,72,92);
`;

const GitContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Button = styled.a`
    display: flex;
    align-items: center;
    padding: 10px 30px;
    border: 2px solid white;
    font-weight: bold;
    font-size: 1.5rem;
    text-decoration: none;
    transition: transform 0.25s ease-in-out;
    &:hover{
        transform: scale(1.07);
    }
    & img{
        width: 48px;
        height: 50px;
        margin-left: 10px;
    }
`;

const GitHub = props => {
    const { t } = useTranslation('common');
    const {indexScroll} = useContext(GlobalContext);
    const [inView, setIsInView] = useState(false);
    const ref = useRef();
    useIntersection(ref, () => {
        setIsInView(true);
    }, {
        rootMargin: '0px',
        threshold: '0.8'
    });

    const fadeLeft = indexScroll ? null : {
        initial: {opacity: 0, x: -250},
        get animate() {
            return inView ? {opacity: 1, x: 0} : this.initial
        },
        transition: {duration: 0.5, ease: "easeInOut", delay: 0.2}
    }

    return(
        <GitHubBackground name="github">
            <GitContainer className="container" ref={ref}>
                <h2 style={{textAlign: 'center', marginBottom: '40px'}}>{t('GitHub')}</h2>
                <motion.div {...fadeLeft}>
                    <Button href="https://github.com/adam-blicharz" target="blank"> GitHub <img src="/github.png" alt=""/> </Button>
                </motion.div>
            </GitContainer>
        </GitHubBackground>
    )
}

export default GitHub;
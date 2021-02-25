import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AboutMeSection = styled.section`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 15vh 0 10px 0;
    @media(min-width: 992px){
        padding-top 120px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Image = styled(motion.img)`
    display: block;
    width: 230px;
    height: 244px;
    margin: auto;
    margin-top: 30px;
    border-radius: 20px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.26);
    @media(min-width: 992px){
        width: 420px;
        height: 446px;
    }
`;

export const Title = styled(motion.p)`
    font-size: 1.9rem;
    text-align: center;
    line-height: 2.1rem;
    letter-spacing: 0.1rem;
    margin: 1.1rem 0;
    @media(min-width: 992px){
        font-size: 2.2rem;
        letter-spacing: 0.18rem;
        line-height: 1.8rem;
    }
`;
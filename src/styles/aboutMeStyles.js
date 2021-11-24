import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 15vh 0 10px 0;
    @media(min-width: 992px){
        padding-top 120px;
    }
`;

export const ImageConatiner = styled(motion.div)`
    width: 290px;
    margin: auto;
    margin-top: 30px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.26);
    & img{
        border-radius: 20px;
    }
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
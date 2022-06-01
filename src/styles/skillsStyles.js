import styled from 'styled-components';
import {motion} from 'framer-motion';
import { Element } from 'react-scroll';

export const SkillsContainer = styled(Element)`
    position: relative;
    width: 100%;
    padding: 0 15px;
    background-color: transparent;
    margin-top: 10px;
    @media(min-width: 768px){
        margin-top: 30px;
        padding: 50px 0 10px 0;
    }
`;

export const SkillsContent = styled(motion.div)`
    display: grid;
    grid-template-columns: 100fr;
    border-radius: 20px;
    padding: 30px 0 40px 0;
    & div:nth-of-type(2){
        border: solid lightgray;
        border-width: 1px 0;
    }
    @media(min-width: 992px){
        grid-template-columns: 33fr 33fr 33fr;
        & div:nth-of-type(2){
            border-width: 0 1px;
        }
    }
`;

export const Skill = styled(motion.div)`
    width: 100%;
    height: 100%;
    padding: 12px 15px;
    text-align: center;
`;

export const Title = styled.div`
    font-size: 1.2rem;
    margin: 10px 0 30px 0;
    & p{
        font-size: 1.5rem;
        font-weight: bold;
        margin: 10px 0 20px 0;
    }
    & img{
        width: 64px;
        height: 64px;
    }
`;

export const Stack = styled.p`
    font-weight: bold;
    padding: 15px 0;
    font-size: 1.2rem;
`;
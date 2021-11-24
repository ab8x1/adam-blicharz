import styled from 'styled-components';
import {motion} from 'framer-motion';
import { Element } from 'react-scroll';

export const SkillsContainer = styled(Element)`
    position: relative;
    width: 100%;
    padding: 45px 0 10px 0;
    background-color: transparent;
    @media(min-width: 992px){
        padding: 50px 0 10px 0;
    }
`;

export const SkillsContent = styled(motion.div)`
    display: grid;
    grid-template-columns: 100fr;
    border-radius: 20px;
    box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
    background-color: rgb(56, 72, 92);
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

export const Skill = styled.div`
    width: 100%;
    height: 100%;
    padding: 12px 15px;
    text-align: center;
`;

export const Title = styled.div`
    font-size: 1.2rem;
    margin: 10px;
    & p{
        font-size: 1.4rem;
        font-weight: bold;
        margin: 10px 0;
    }
    & img{
        width: 64px;
        height: 64px;
    }
`;

export const Stack = styled.p`
    font-weight: bold;
    padding: 10px 0;
`;
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
    display: grid;
    grid-template-columns: 1fr;
    padding: 12vh 0 10px 0;
    @media(min-width: 768px){
        grid-template-columns: 1fr 1fr;
        padding-top: 120px;
    }
`;

export const InfoText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 1.9rem;
    text-align: center;
    & h1{
        font-size: 1em;
        line-height: 2.1rem;
        margin: 1.5rem 0 0.2rem 0;
    }
    & h2{
        font-size: 0.85em;
        line-height: 2.4rem;
    }
    @media(min-width: 768px){
        text-align: left;
        font-size: 2rem;
        padding: 60px 0 100px 0;
    }
    @media(min-width: 992px){
        font-size: 2.3rem;
        letter-spacing: 0.2rem;
        line-height: 1.8rem;
        padding: 80px 0 100px 0;
    }
    @media(min-width: 1200px){
        font-size: 3.2rem;
        padding: 140px 0;
    }
`;

export const VisualInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StackContainer = styled(motion.div)`
    position: relative;
    width: 245px;
    height: 240px;
    background: rgb(56,72,92);
    box-shadow: 0px 104px 224px rgba(0, 0, 0, 0.05);
    border-radius: 60px 30px;
    margin: 50px auto 10px auto;
    z-index: 1;
    @media(min-width: 768px){
        width: 220px;
        margin: unset;
    }
    @media(min-width: 992px){
        width: 300px;
        height: 300px;
        border-radius: 140px 60px;
    }
    @media(min-width: 1200px){
        width: 380px;
        height: 360px;
    }
`;

export const Tool = styled(motion.div)`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: rgb(36,52,72);
    box-shadow: 2px 4px 10px rgba(24, 24, 24, 0.1);
    border-radius: 27px;
    padding: 10px 18px 10px 14px;
    font-size: 11px;
    cursor: default;
    @media(min-width: 992px){
        font-size: 15px;
        padding: 12px 25px 12px 15px;
        &:hover{
            transform: scale(1.07);
            transition: transform 0.2s ease-in-out;
        }
    }
`;

export const Icon = styled.div`
    width: 22px;
    height: 22px;
    border-radius: 50%;
    margin-right: 10px;
    overflow: hidden;
    @media(min-width: 992px){
        width: 32px;
        height: 32px;
    }
`;

export const Circle = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 80px;
    height: 80px;
    padding: 15px;
    background: radial-gradient(81.9% 81.9% at 50% 18.1%, #FCDC67 0%, #EDAE50 100%);
    border-radius: 48px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 14px;
    @media(min-width: 992px){
        width: 104px;
        height: 104px;
        font-size: 1rem;
    }
`;
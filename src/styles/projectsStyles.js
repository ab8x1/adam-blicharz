import styled from 'styled-components';
import { Element } from 'react-scroll';

export const ProjectsContainer = styled(Element)`
    position: relative;
    margin: 0 auto;
    padding: 50px 15px 10px 15px;
    @media(min-width: 768px){
        padding: 80px 15px 65px 15px;
    }
`;

export const Title = styled.h2`
    margin: 10px 0 50px 0;
    text-align: center;
    font-size: 2rem;
    @media(min-width: 768px){
        margin: 20px 0 70px 0;
    }
`;

export const ProjectsContent = styled.div`
    display: flex;
    max-width: 95%;
    padding-bottom: 30px;
    margin: 0 auto;
    margin-bottom: 80px;
    overflow-x: scroll;
    scroll-behavior: smooth;
    @media(min-width: 992px){
        max-width: 85%;
        margin-bottom: 100px;
    }
`;

export const Project = styled.div`
    display: grid;
    grid-template-rows: 80px 1fr 90px;
    justify-items: flex-start;
    min-width: calc((100%) - (30px));
    padding: 30px;
    margin: 0 15px;
    border-radius: 30px;
    background-image: linear-gradient(to right, #8360c3, #2ebf91);
    @media(min-width: 992px){
        margin: 0 30px;
        min-width: calc((50%) - (60px));
        padding: 30px 50px;
    }
`;

export const ProjectImg = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 60px;
    height: 60px;
    padding: 15px;
    background-color: white;
    border-radius: 50%;
    margin: 0;
`;

export const Button = styled.button`
    display: table;
    margin: 20px 0;
    padding: 0 60px;
    background-color: rgb(56,72,92);
    border-radius: 10px;
    outline: none;
    border: none;
    font-size: 0.95rem;
    text-decoration: none;
    cursor: pointer;
    color: white;
    font-weight: bold;
    transition: all 0.2s ease-in-out;
    &:hover{
        transform: scale(1.04);
    }
`;

export const Arrow = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    ${({forth}) => forth ? `right: 0; transform: translateY(-50%) rotate(180deg);`:`left: 0;`}
    height: 64px;
    width: 64px;
    cursor: pointer;
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
    ${({disabled}) => disabled && `
        opacity: 0.3;
        pointer-events: none;
    `};
`;
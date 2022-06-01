import styled from 'styled-components';
import { Element } from 'react-scroll';

export const ProjectsSection = styled(Element)`
    position: relative;
    margin: 0 auto;
    padding: 10px 15px 30px 15px;
    @media(min-width: 768px){
        padding: 80px 15px 65px 15px;
    }
`;

export const Title = styled.h2`
    margin: 0 0 30px 0;
    text-align: center;
    font-size: 2rem;
    @media(min-width: 768px){
        margin-bottom: 50px;
    }
`;

export const Project = styled.div`
    display: grid;
    grid-template-rows: 1fr 50px;
    justify-items: flex-start;
    width: 100%;
    padding: 30px;
    border-radius: 30px;
    @media(min-width: 992px){
        padding: 30px 50px;
    }
`;

export const ProjectTitle = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden;
    margin: 0;
    & h2{
        margin: 10px 0;
    }
`;

export const Button = styled.button`
    display: table;
    margin: 0px 0;
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
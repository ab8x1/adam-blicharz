import styled from 'styled-components';
import { Element } from 'react-scroll';

export const ProjectsSection = styled(Element)`
    position: relative;
    margin: 0 auto;
    padding: 50px 15px 10px 15px;
    @media(min-width: 768px){
        padding: 80px 15px 65px 15px;
    }
`;

export const Title = styled.h2`
    margin-bottom: 50px;
    text-align: center;
    font-size: 2rem;
`;

export const Project = styled.div`
    display: grid;
    grid-template-rows: 80px 1fr 90px;
    justify-items: flex-start;
    width: 100%;
    padding: 30px;
    border-radius: 30px;
    @media(min-width: 992px){
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
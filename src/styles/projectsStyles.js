import styled from 'styled-components';

export const ProjectsSection = styled.section`
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

export const ProjectsContainer = styled.div`
    display: grid;
    grid-template-columns: 100fr;
    gap: 30px;
    margin-bottom: 80px;
    @media(min-width: 992px){
        grid-template-columns: 33fr 33fr 33fr;
        margin-bottom: 100px;
    }
`;

export const Project = styled.div`
    position: relative;
    height: 100%;
    display: grid;
    grid-template-rows: 100px 1fr 63px;
    padding: 10px;
    border: 3px solid #058C9A;
    border-radius: 15px;
    text-align: center;
    font-weight: bold;
    font-size: 0.95rem;
    background-color: rgb(56, 72, 92);
    padding: 30px 15px 30px 15px;
    overflow: hidden;
    &:hover span{
        opacity: 0.95;
    }
`;

export const ProjectImg = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 140px;
    margin: 0px auto;
`;

export const Button = styled.button`
    display: block;
    margin: 20px auto 0 auto;
    padding: 3px 45px;
    background-color: #058C9A;
    border-radius: 10px;
    outline: none;
    border: 2px solid #058C9A;
    font-size: 0.95rem;
    text-decoration: none;
    cursor: pointer;
    color: white;
    font-weight: bold;
    transition: all 0.2s ease-in-out;
    &:hover{
        background-color: white;
        color: #058C9A;
        transform: scale(1.04);
    }
`;
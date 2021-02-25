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
    text-align: center;
    box-shadow: rgba(0, 0, 0, 0.22) 0px 3px 1px -2px, rgba(0, 0, 0, 0.16) 0px 2px 2px 0px, rgba(0, 0, 0, 0.15) 0px 1px 5px 0px;
    border-radius: 10px;
    background-color: rgb(56, 72, 92);
    padding: 30px 15px 35px 15px;
    overflow: hidden;
    &:hover span{
        opacity: 0.95;
    }
`;

export const ProjectImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 100px;
    margin: 0px auto;
    & img{
        width: 100%;
    }
`;

export const Button = styled.button`
    margin: 20px auto 0 auto;
    padding: 10px 50px;
    background-color: white;
    border-radius: 5px;
    outline: none;
    border: none;
    font-size: 0.95rem;
    text-decoration: none;
    cursor: pointer;
    color: #33334f;
`;
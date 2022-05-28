import styled from 'styled-components';
import {motion} from 'framer-motion';

export const ProjectSection = styled.section`
    position: relative;
    width: 100%;
    height: 100%;
    padding: 40px 15px;
`;

export const BackButton = styled.button`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 11px 20px;
    font-size: 0.95rem;
    background-color: transparent;
    color: white;
    border: 3px solid white;
    font-weight: bold;
    border-radius: 10px;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    & img{
        width: 20px;
        margin-right: 5px;
        filter: invert(1);
    }
    &:hover{
        color: black;
        background-color: white;
        transform: scale(1.03);
        & img{
            filter: none
        }
    }
`;

export const ShowWebsite = styled.a`
    display: flex;
    align-items: center;
    font-size: 1rem;
    font-weight: normal;
    margin-left: 30px;
    border: 2px solid lightgray;
    border-radius: 10px;
    padding: 7px 25px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    & img{
        width: 35px;
        margin-left: 10px;
    }
    &:hover{
        transform: scale(1.05);
    }
`;

export const Title = styled.div`
    display: flex;
    align-items: center;
    margin: 60px 0 20px 0;
    font-size: 1.9rem;
`;

export const Content = styled.div`
    font-size: 1.1rem;
    line-height: 1.7rem;
    text-align: justify;
`;

export const GalleryContainer = styled(motion.div)`
    position: relative;
    max-width: 900px;
    max-height: 505px;
    margin: 50px auto 50px auto;
    overflow: hidden;
    border-radius: 10px;
    @media(min-width: 768px){
        height: 388px;
        & img{
            height: 388px;
        }
    }
    @media(min-width: 991px){
        height: 505px;
        & img{
            height: 505px;
        }
    }
`;

export const Gallery = styled(motion.div)`
    position: absolute;
    width: 100%;
    height: 100%;
`;
import styled from 'styled-components';

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
    padding: 11px 0;
    width: 245px;
    font-size: 0.95rem;
    background-color: transparent;
    color: white;
    border: solid rgb(96,112,132);
    border-width: 2px 2px 5px 2px;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    & img{
        width: 20px;
        margin-right: 5px;
    }
    &:hover{
        border-width: 2px;
        margin-top: 3px;
    }
`;

export const ShowWebsite = styled.a`
    display: flex;
    align-items: center;
    font-size: 1rem;
    font-weight: normal;
    margin-left: 30px;
    border: 1px solid lightgray;
    border-radius: 5px;
    padding: 7px 20px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
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

export const Gallery = styled.div`
    max-width: 900px;
    max-height: 505px;
    margin: 50px auto 50px auto;
    overflow: hidden;
    border: 1px solid lightgray;
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
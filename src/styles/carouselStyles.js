import styled from 'styled-components';

export const CarouselContainer = styled.div`
    position: relative;
    width: 100%;
    padding: 0 10px;
    @media(min-width: 768px){
        padding: 0 45px;
    }
`;

export const CarouselContent = styled.div`
    display: flex;
    overflow-x: scroll;
    padding: 20px 0;
    scroll-behavior: smooth;
    scrollbar-width: none;
    ${({active}) => `
        & > div:nth-of-type(${active}){
            transform: scale(1.05);
        }
    `}
    &::-webkit-scrollbar{
        display: none;
    }
`;

export const Item = styled.div`
    display: flex;
    min-height: 100%;
    transition: transform 0.2s ease-in-out;
    ${({sizes}) => {
        let style = '';
        sizes?.forEach(({size, columns, gap}) => {
            style += `@media(min-width: ${size}px){
                min-width: calc((${100/columns}%) - (${gap*2}px));
                margin: 0 ${gap}px;
            }`
        })
        return style;
    }}
`;

export const Arrow = styled.button`
    position: absolute;
    top: 45%;
    transform: translateY(-50%);
    ${({forth}) => forth ? `right: 0; transform: translateY(-50%) rotate(180deg);`:`left: 0;`}
    height: 40px;
    width: 40px;
    cursor: pointer;
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
    z-index: 100;
    background: transparent;
    border: none;
    & span{
        pointer-events: none;
    }
    ${({disabled}) => disabled && `
        opacity: 0.3;
        pointer-events: none;
    `};
`;

export const Dots = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px 0 0 0;
`;

export const Dot = styled.button`
    display: block;
    border: none;
    outline: none;
    border-radius: 50%;
    margin: 0 10px;
    padding: 0;
    background-color: #0288D1;
    cursor: pointer;
    ${({active}) => active ? `
        width: 15px;
        height: 15px;
        opacity: 1;
        cursor: default;
        pointer-events: none;
    ` : `
        width: 10px;
        height: 10px;
        opacity: 0.7;
        cursor: pointer;
        transition: transform 0.2s ease-in-out;
        &:hover{
            transform: scale(1.4);
        }
    `};
`;
import styled from 'styled-components';

export const CarouselContainer = styled.div`
    position: relative;
    width: 100%;
    padding: 0 45px;
`;

export const CarouselContent = styled.div`
    display: flex;
    overflow-x: scroll;
    scroll-behavior: smooth;
    scrollbar-width: none;
    &::-webkit-scrollbar{
        display: none;
    }
`;

export const Item = styled.div`
    display: flex;
    min-height: 100%;
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
    z-index: 100;
    ${({disabled}) => disabled && `
        opacity: 0.3;
        pointer-events: none;
    `};
`;

export const Dots = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    margin: 40px 0 0 0;
`;

export const Dot = styled.span`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin: 0 10px;
    background-color: #0288D1;
    cursor: pointer;
`;
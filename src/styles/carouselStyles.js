import styled from 'styled-components';

export const CarouselContainer = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    overflow-x: scroll;
    scroll-behavior: smooth;
`;

export const Item = styled.div`
    ${({sizes}) => sizes.map(({size, gap, width}) => `
        @media(min-width: ${size}px){
            min-width: calc((${width}) - (${gap*2}px));
            margin: 0 ${gap}px;
        }
    `)}
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
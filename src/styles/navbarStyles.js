import styled from 'styled-components';

export const Nav = styled.nav`
    position: fixed;
    ${({isActive}) => isActive && `
        background: rgb(28, 39, 51);
        border-bottom: 2px solid rgb(23, 33, 43);
    `};
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    color: white;
    user-select: none;
    transition: background 0.3s ease-in-out;
`;

export const NavContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 67px;
`;

export const NavBrand = styled.h3`
    cursor: pointer;
    letter-spacing: 1.7px;
    padding: 5px;
`;


export const NavRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-left: 40px;
`;

export const Languages = styled.div`
    position: relative;
    display: flex;
    margin: 0;
    order: 1;
    @media (min-width: 768px) {
        background: rgba(28, 39, 51, 0.6);
        border-radius: 10px;
        padding: 5px 20px;
        order: 2;
    }
`;

export const Language = styled.div`
    position: relative;
    height: 36px;
    width: 36px;
    cursor: pointer;
    & img{
        border-radius: 12px;
        height: 36px;
        width: 36px;
    }
    ${({selected}) => selected && `
        &::before{
            content: '';
            position: absolute;
            left: -7px;
            right: -7px;
            bottom: -5px;
            border-bottom: 2px solid #058C9A;
        }
    `}
`;

export const MenuItems = styled.ul`
    height: ${({open}) => open ? '210px' : '0'};
    overflow: hidden;
    position: absolute;
    display: flex;
    flex-direction: column;
    left: 0;
    right: 0;
    top: 100%;
    list-style: none;
    padding: 0;
    margin: 0;
    background-image: linear-gradient(to right bottom, #313e4f, #2c3848, #263241, #212d3a, #1c2733);
    box-shadow: 0px 2px 6px 0px rgba(0,0,0,0.4);
    border-radius: 0 0 10px 10px;
    @media (min-width: 768px) {
        position: relative;
        top: unset;
        flex-direction: row;
        height: auto;
        background: transparent;
        box-shadow: none;
        margin-right: 20px;
    }
    transition: height 0.4s ease-in-out;
`;

export const MenuItem = styled.li`
    max-width: 540px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    border-bottom: 1px solid #455A64;
    cursor: pointer;
    & a{
        display: block;
        padding: 15px;
    }
    & a:hover{
        color: #f3f169;
    }
    &:last-of-type{
        border-bottom: none;
    }
    @media (min-width: 768px) {
        width: auto;
        border-bottom: none;
        margin-left: 15px;
        background: rgba(28, 39, 51, 0.6);
        & a{
            padding: 10px;
        }
    }
`;

export const MenuToogler = styled.div`
    order: 2;
    display: block;
    position: relative;
    width: 25px;
    height: 18px;
    cursor: pointer;
    margin-left: 30px;
    ${({open}) => {
        if(open) return`
            & span:nth-of-type(1){
                top: 50%;
                transform: rotate(45deg);
            }
            & span:nth-of-type(2){
                opacity: 0;
                transition: none;
            }
            & span:nth-of-type(3){
                top: 50%;
                transform: rotate(-45deg);
            }
        `;
        else return`
            & span:nth-of-type(1){
                top: 0;
            }
            & span:nth-of-type(2){
                top: 50%;
            }
            & span:nth-of-type(3){
                top: 100%;
            }
        `;
    }}
    @media (min-width: 768px) {
        display: none;
    }
`;

export const Bar = styled.span`
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: white;
    transition: all 0.2s ease-in-out;
`;

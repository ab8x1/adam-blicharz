import styled from 'styled-components';
import { Element } from 'react-scroll';

export const ContactContainer = styled(Element)`
    background-color: #081229;
    padding: 80px 15px 30px 15px;
    color: white;
    @media(min-width: 992px){
        padding: 70px 15px 30px 15px;
    }
`;

export const Title = styled.h2`
    font-size: 1.8rem;
    margin-bottom: 60px;
    text-align: center;
    @media(min-width: 992px){
        margin-bottom: 80px;
    }
`;

export const Inputs = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 95%;
    max-width: 700px;
    margin: 50px auto;
`;

export const Labels = styled.div`
    display: flex;
    margin-bottom: 8px;
    margin: 15px 0 20px 0;
`;

export const Input = styled.div`
    width: 100%;
    @media(min-width: 768px){
        width: 48%;
    }
    & input{
        margin: 10px 0;
        font-size: 1rem;
        width: 100%;
        padding: 5px 10px;
        border-color: ${({error}) => error ? 'red' : 'black'};
    }
`;

export const TextInput = styled.textarea`
    min-width: 100%;
    min-height: 200px;
    max-height: 300px;
    padding: 5px 10px;
    font-size: 1.1rem;
    border-color: ${({error}) => error ? 'red' : 'black'};
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 70px auto;
    width: 150px;
    height: 45px;
    font-size: 1.1rem;
    background-color: #EC5990;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    &:hover {
        background-color: #DB4880;
    }
`;

export const ErrorMessage = styled.label`
    margin-left: 20px;
    color: red;
`;

export const ContactInfo = styled.label`
    display: block;
    text-align: center;
    padding: 10px 0 20px 0;
    @media(min-width: 992px){
        padding: 30px 0 40px 0;
    }
`;
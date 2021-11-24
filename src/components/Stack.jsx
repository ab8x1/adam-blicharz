import styled from 'styled-components';
import Image from 'next/image';

const StackWrapper = styled.div`
    display: grid;
    grid-template-columns: 100fr;
    gap: 20px;
    margin: 50px 0;
    @media(min-width: 992px){
        grid-template-columns: 33fr 33fr 33fr;
        gap: 25px;
    }
`;

const StackCol = styled.div`
    border: 3px solid white;
    padding: 20px 25px;
    border-radius: 10px;
    & h3{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
    }
    & img{
        width: 50px;
    }
    & span{
        margin-right: 20px;
    }
    & ul{
        list-style: none;
        margin-left: 0;
        padding-left: 1em;
    }
    & li{
        margin-top: 12px;
    }
    & li::before{
        display: inline-block;
        content: "-";
        width: 1em;
        margin-left: -1em;
    }
`;

const Stack = ({frontend, backend, devops}) => {
    return(
        <StackWrapper>
            <StackCol>
                <h3><span>Frontend</span> <Image src="/Frontend.png" width={50} height={50}/></h3>
                <ul>{
                    frontend?.map((front, i) => <li key={`${i}.${front}`}>{front}</li>)
                }</ul>
            </StackCol>
            <StackCol>
                <h3><span>Backend</span> <Image src="/Backend.png" width={50} height={50}/></h3>
                <ul>{
                    backend?.map((front, i) => <li key={`${i}.${front}`}>{front}</li>)
                }</ul>
            </StackCol>
            <StackCol>
                <h3><span>DevOps</span> <Image src="/DevOps.png" width={50} height={50}/></h3>
                <ul>{
                    devops?.map((front, i) => <li key={`${i}.${front}`}>{front}</li>)
                }</ul>
            </StackCol>
        </StackWrapper>
    )
}

export default Stack;
import styled from 'styled-components';

const StackWrapper = styled.div`
    display: grid;
    grid-template-columns: 100fr;
    gap: 20px;
    margin: 50px 0;
    @media(min-width: 992px){
        grid-template-columns: 33fr 33fr 33fr;
    }
`;

const StackCol = styled.div`
    border: 3px solid rgb(96,112,132);
    padding: 35px 25px;
    border-radius: 10px;
    & h3{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 0;
    }
    & img{
        margin-left: 20px;
        width: 50px;
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
                <h3>Frontend <img src="/frontend.png" alt=""/></h3>
                <ul>{
                    frontend?.map((front, i) => <li key={`${i}.${front}`}>{front}</li>)
                }</ul>
            </StackCol>
            <StackCol>
                <h3>Backend <img src="/backend.png" alt=""/></h3>
                <ul>{
                    backend?.map((front, i) => <li key={`${i}.${front}`}>{front}</li>)
                }</ul>
            </StackCol>
            <StackCol>
                <h3>DevOps <img src="/devops.png" alt=""/></h3>
                <ul>{
                    devops?.map((front, i) => <li key={`${i}.${front}`}>{front}</li>)
                }</ul>
            </StackCol>
        </StackWrapper>
    )
}

export default Stack;
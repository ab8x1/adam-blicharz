import Link from 'next/link';
import styled from 'styled-components';
import useTranslation from 'next-translate/useTranslation';

const Arrow = styled.div`
    position: fixed;
    display: none;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    cursor: pointer;
    &:hover label{
        display: block;
    }
    @media(min-width: 992px){
        display: block;
    }
`;

const ArrowContainer = styled.div`
    position: relative;
    & label{
        display: none;
        position: absolute;
        background-color: rgba(0,0,0,0.8);
        color: white;
        width: 100px;
        top: -70px;
        padding: 10px;
        font-size: 0.8rem;
        text-align: center;
        border-radius: 10px;
    }
    ${({mirror}) => mirror && `
        & img{
            transform: scaleX(-1);
        }
    `}
`;

const ProjectArrows = ({prev, next}) => {
    const { t } = useTranslation('common');
    return(<>
        <Arrow style={{left: '10px'}}>
            <ArrowContainer mirror>
                <Link href="/projects/[project]" as={`/projects/${prev}`}><a>
                    <img src="/forth.png" alt=""/>
                </a></Link>
                <label style={{left: '5px'}}>{t('PreviousProject')}</label>
            </ArrowContainer>
        </Arrow>
        <Arrow style={{right: '10px'}}>
            <ArrowContainer>
                <Link href="/projects/[project]" as={`/projects/${next}`}><a>
                    <img src="/forth.png" alt=""/>
                </a></Link>
                <label style={{right: '5px'}}>{t('NextProject')}</label>
            </ArrowContainer>
        </Arrow>
    </>)
}

export default ProjectArrows;
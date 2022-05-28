import Link from 'next/link';
import styled from 'styled-components';
import useTranslation from 'next-translate/useTranslation';

const Arrow = styled.div`
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    ${({left}) => left ? 'left: -10px;' : 'right: -10px;'}
    z-index: 10;
    cursor: pointer;
    &:hover label{
        display: block;
    }
    @media(min-width: 768px){
        ${({left}) => left ? 'left: 10px;' : 'right: 10px;'}
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
    & img{
        width: 50px;
        height: 50px;
    }
    @media(min-width: 768px){
        & img {
            width: 70px;
            height: 70px;
        }
    }
`;

const ProjectArrows = ({prev, next}) => {
    const { t } = useTranslation('common');
    return(<>
        <Arrow left>
            <ArrowContainer mirror>
                <Link href="/projects/[project]" as={`/projects/${prev}`}><a>
                    <img src="/forth.png" alt=""/>
                </a></Link>
                <label style={{left: '5px'}}>{t('PreviousProject')}</label>
            </ArrowContainer>
        </Arrow>
        <Arrow>
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
import {useState, memo, useEffect} from 'react';
import NavToogle from './NavToogle';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import {Nav, NavContainer, NavBrand, NavRight, Languages, Language} from '../styles/navbarStyles';
import { animateScroll as scroll } from 'react-scroll';

function Navbar(){
    const [isActive, setActive] = useState(false);
    const { lang } = useTranslation();

    const checkIfActive = () => {
        if(window.scrollY >= 80) setActive(true);
        else setActive(false);
    }

    useEffect(() => {
        checkIfActive();
        window.addEventListener('scroll', checkIfActive);
        return () => {
            window.removeEventListener('scroll', checkIfActive);
        }
    }, []);

    return(
        <Nav isActive={isActive}>
            <NavContainer className="container">
                <NavBrand onClick={() => scroll.scrollToTop({duration: 300})}>
                    AB
                </NavBrand>
                <NavRight>
                    <NavToogle setActive={setActive}/>
                    <Languages>
                        <Language selected={lang === 'en'}>
                            <Link href='/' locale={'en'} scroll={false}>
                                <img src="/eng.png" />
                            </Link>
                        </Language>
                        <Language selected={lang === 'pl'} style={{marginLeft: '20px'}}>
                            <Link href='/' locale={'pl'} scroll={false}>
                                <img src="/pl.png"/>
                            </Link>
                        </Language>
                    </Languages>
                </NavRight>
            </NavContainer>
        </Nav>
    )
}

export default memo(Navbar);
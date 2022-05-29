import {useState, memo, useEffect, useRef} from 'react';
import NavToogle from './NavToogle';
import {GlobalContext} from'./App';
import Link from 'next/link';
import {useContext} from 'react';
import useTranslation from 'next-translate/useTranslation';
import {Nav, NavContainer, NavBrand, NavRight, Languages, Language} from '../styles/navbarStyles';
import { animateScroll as scroll } from 'react-scroll';

function Navbar(){
    const {indexScroll} = useContext(GlobalContext);
    const [isActive, setActive] = useState(indexScroll?.yPos >= 80);
    const { lang } = useTranslation();
    const navRef = useRef();

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
        <Nav isActive={isActive} ref={navRef}>
            <NavContainer className="container">
                <NavBrand onClick={() => scroll.scrollToTop({duration: 300})}>
                    AB
                </NavBrand>
                <NavRight>
                    <NavToogle/>
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
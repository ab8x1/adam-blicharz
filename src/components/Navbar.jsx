import NavToogle from './NavToogle';
import Link from 'next/link';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import {Nav, NavContainer, NavBrand, NavRight, Languages, Language} from '../styles/navbarStyles';
import { animateScroll as scroll } from 'react-scroll';

export default function Navbar(){
    const { lang } = useTranslation();
    return(
        <Nav>
            <NavContainer className="container">
                <NavBrand onClick={() => scroll.scrollToTop({duration: 300})}>
                    AB
                </NavBrand>
                <NavRight>
                    <NavToogle/>
                    <Languages>
                        <Language selected={lang === 'en'}>
                            <Link href='/' locale={'en'} scroll={false}>
                                <Image src="/eng.png" width={36} height={36}/>
                            </Link>
                        </Language>
                        <Language selected={lang === 'pl'} style={{marginLeft: '20px'}}>
                            <Link href='/' locale={'pl'} scroll={false}>
                                <Image src="/pl.png" width={36} height={36}/>
                            </Link>
                        </Language>
                    </Languages>
                </NavRight>
            </NavContainer>
        </Nav>
    )
}
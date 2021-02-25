import NavToogle from './NavToogle';
import Link from 'next/link';
import {Nav, NavContainer, NavBrand, NavRight, Languages} from '../styles/navbarStyles';
import { animateScroll as scroll } from 'react-scroll';

const Navbar = props => {
    return(
        <Nav>
            <NavContainer className="container">
                <NavBrand onClick={() => scroll.scrollToTop({duration: 300})}>
                    AB
                </NavBrand>
                <NavRight>
                    <NavToogle/>
                    <Languages>
                        <Link href='/' locale={'en'} scroll={false}>
                            <img src="/eng.png" alt=""/>
                        </Link>
                        <Link href='/' locale={'pl'} scroll={false}>
                            <img src="/pl.png" alt="" style={{padding: '2px 0', marginLeft: '20px'}}/>
                        </Link>
                    </Languages>
                </NavRight>
            </NavContainer>
        </Nav>
    )
}

export default Navbar;
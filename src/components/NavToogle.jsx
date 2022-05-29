import {useState, useRef} from 'react';
import { Link } from 'react-scroll';
import {MenuItem, MenuItems, MenuToogler, Bar, NavToogleContainer} from '../styles/navbarStyles';
import useTranslation from 'next-translate/useTranslation';
import onClickOutside from '../helpers/onClickOutside';

export default function NavToogle(){
    const [menu, setMenu] = useState(false);
    const { t } = useTranslation('common');
    const ref = useRef(null);

    const toogleMenu = () => {
        setMenu(menu => !menu);
    }

    const closeMenu = () => {
        setMenu(false);
    }

    onClickOutside(ref, closeMenu);

    return(
        <NavToogleContainer ref={ref}>
            <MenuToogler open={menu} onClick={toogleMenu}>
                <Bar/>
                <Bar/>
                <Bar/>
            </MenuToogler>
            <MenuItems open={menu}>
                <MenuItem>
                    <Link onClick={closeMenu} activeClass="active" to="skills" spy={true} smooth={true} offset={-67} duration={500}>
                        {t('common:Skills')}
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link onClick={closeMenu} activeClass="active" to="projects" spy={true} smooth={true} offset={-67} duration={500}>
                        {t('common:Projects')}
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link onClick={closeMenu} activeClass="active" to="github" spy={true} smooth={true} offset={-67} duration={500}>
                        GitHub
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link onClick={closeMenu} activeClass="active" to="contact" spy={true} smooth={true} offset={-67} duration={500}>
                        {t('common:Contact')}
                    </Link>
                </MenuItem>
            </MenuItems>
        </NavToogleContainer>
    )
}
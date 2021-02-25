import {Component } from 'react';
import withTranslation from 'next-translate/withTranslation';
import { Link } from 'react-scroll';
import onClickOutside from "react-onclickoutside";
import {MenuItem, MenuItems, MenuToogler, Bar} from '../styles/navbarStyles';

class NavToogle extends Component{
    constructor(){
        super();
        this.state = {
            menu: false
        }
    }
    toogleMenu = () => {
        this.setState(({menu}) => ({menu: !menu}));
    }
    closeMenu = () => {
        if(this.state.menu){
            this.setState({menu: false});
        }
    }
    handleClickOutside = evt => {
        this.closeMenu();
    };
    render(){
        const {menu} = this.state;
        const { t } = this.props.i18n
        return(
            <>
            <MenuToogler open={menu} onClick={this.toogleMenu}>
                <Bar/>
                <Bar/>
                <Bar/>
            </MenuToogler>
            <MenuItems open={menu}>
                <MenuItem>
                    <Link onClick={this.closeMenu} activeClass="active" to="skills" spy={true} smooth={true} offset={-67} duration={500}>
                        {t('common:Skills')}
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link onClick={this.closeMenu} activeClass="active" to="projects" spy={true} smooth={true} offset={-67} duration={500}>
                        {t('common:Projects')}
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link onClick={this.closeMenu} activeClass="active" to="github" spy={true} smooth={true} offset={-67} duration={500}>
                        GitHub
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link onClick={this.closeMenu} activeClass="active" to="contact" spy={true} smooth={true} offset={-67} duration={500}>
                        {t('common:Contact')}
                    </Link>
                </MenuItem>
            </MenuItems>
            </>
        )
    }
}


export default withTranslation(onClickOutside(NavToogle));
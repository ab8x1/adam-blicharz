import {Component } from 'react';
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
                        Umiejętności
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link onClick={this.closeMenu} activeClass="active" to="projects" spy={true} smooth={true} offset={-67} duration={500}>
                        Moje Projekty
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link onClick={this.closeMenu} activeClass="active" to="github" spy={true} smooth={true} offset={-67} duration={500}>
                        GitHub
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link onClick={this.closeMenu} activeClass="active" to="contact" spy={true} smooth={true} offset={-67} duration={500}>
                        Kontakt
                    </Link>
                </MenuItem>
            </MenuItems>
            </>
        )
    }
}


export default onClickOutside(NavToogle);
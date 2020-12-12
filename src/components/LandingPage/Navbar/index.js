import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements.js';

const Navbar = ( {toggle} ) => {
    // setting changed color with smooth scroll pada navbar
    const [scrollNav, setScrollNav] = useState(false);
    const [scrollNavLinks, setScrollNavLinks] = useState(false);
    const [scrollNavLogo, setScrollNavLogo] = useState(false);
    const [mobIcon, setMobIcon] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true);
            setScrollNavLinks(true);
            setScrollNavLogo(true);
            setMobIcon(true);
        } else {
            setScrollNav(false);
            setScrollNavLinks(false);
            setScrollNavLogo(false);
            setMobIcon(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
        <IconContext.Provider value={{  color: '#fff' }}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo 
                        scrollNavLogo={scrollNavLogo}
                        to='/' 
                        onClick={toggleHome}
                    >Safe for Care</NavLogo>
                    <MobileIcon 
                        onClick={toggle}
                        mobIcon={mobIcon}
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-50}
                    >
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks 
                                scrollNavLinks={scrollNavLinks}
                                to="register"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-50}
                            >Daftar</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                                scrollNavLinks={scrollNavLinks}
                                to="procedure"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-50}
                            >Prosedur</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                                scrollNavLinks={scrollNavLinks}
                                to="services"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-50}
                            >Layanan</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                                scrollNavLinks={scrollNavLinks}
                                to="about"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-30}
                            >Tentang</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/signin'>Masuk</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    );
};

export default Navbar;

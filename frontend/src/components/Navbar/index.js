import React, { useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import background from "../../images/f1.png"; 
import { animateScroll as scroll } from 'react-scroll';
import { Nav,
         NavbarContainer, 
         NavLogo,
         MobileIcon, 
         NavMenu, 
         NavItem, 
         NavLinks,
         NavBtn,
         NavBtnLink,
         TopImg
        } from './NavbarElements'; 

const Navbar = ({ toggle}) => {

    const [scrollNav,setScrollNav] = useState(false)

    const changeNav = ()=>{
       if(window.scrollY >= 80) {
           setScrollNav(true)
       }else{
           setScrollNav(false)
       }
    }

    useEffect(() => {
        window.addEventListener('scroll',changeNav)
    }, [])

    const toggleHome = () =>{
        scroll.scrollToTop();
    }

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
        <Nav scrollNav={scrollNav}>
              <NavbarContainer> 
                  <NavLogo to="/" onClick={toggleHome}>
                      ProjectManager
                  </NavLogo>

                  <MobileIcon onClick={toggle}>
                      <FaBars />
                  </MobileIcon>

                  <NavMenu>
                      <NavItem>
                          <NavLinks to='about'
                                    smooth={true} 
                                    duration={500} 
                                    spy={true} 
                                    exact='true' 
                                    offset={-80}
                                
                                    >Home</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to="discover"
                                    smooth={true} 
                                    duration={500} 
                                    spy={true} 
                                    exact='true' 
                                    offset={-80}>Templates</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to="services"
                                    smooth={true} 
                                    duration={500} 
                                    spy={true} 
                                    exact='true' 
                                    offset={-80}>Notifications</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to="signup"
                                    smooth={true} 
                                    duration={500} 
                                    spy={true} 
                                    exact='true' 
                                    offset={-80}>Sign Up</NavLinks>
                      </NavItem>

                  </NavMenu>
                  <NavBtn>
                      <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                  </NavBtn>
                  <NavBtn>
                      <TopImg style={{backgroundImage: `url(${background})`,
                                      width: '45px',
                                      height: '45px',
                                      objectFit: 'cover'
                                 }}
                           />
                  </NavBtn>

              </NavbarContainer>
             
        </Nav>
        </IconContext.Provider>
         
        </>
    );
};

export default Navbar;

import React, { useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import {Link} from 'react-router-dom';
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
                      RP Management Tool
                  </NavLogo>

                  <MobileIcon onClick={toggle}>
                      <FaBars />
                  </MobileIcon>

                  <NavMenu>
                      <NavItem>
                        <NavLinks
                                    smooth={true} 
                                    duration={500} 
                                    spy={true} 
                                    exact='true' 
                                    offset={-80}
                                    >
                                    <Link to='/admin/dashboard'>Dashboard</Link>
                        </NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to="/chat"
                                    smooth={true} 
                                    duration={500} 
                                    spy={true} 
                                    exact='true' 
                                    offset={-80}>Chat</NavLinks>
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
                      {/* <img width="100" height="100" style={{backgroundImage: `url(${background})`,
                                      width: '145px',
                                      height: '45px',
                                      
                                      borderRadius: '50%'
                                 }}
                           /> */}
                          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="white" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
</svg>
                  </NavBtn>

              </NavbarContainer>
             
        </Nav>
        </IconContext.Provider>
         
        </>
    );
};

export default Navbar;

import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {
     FooterContainer,
     FooterWrap,
     SocialMedia,
     SocialMediaWrap,
     SocialLogo,
     WebsiteRights,
     SocialIcons,
     SocialIconLink
} from './FooterElements';
const Footer = () => {
     // https://www.npmjs.com/package/react-scroll
     const toggleHome = () => {
          scroll.scrollToTop();
     }

     return (
          <FooterContainer>
               <FooterWrap>
                    <SocialMedia>
                         <SocialMediaWrap>
                              <SocialLogo to="/" onClick={toggleHome}>
                                 Yusuke Yoshihiro
                              </SocialLogo>
                              <WebsiteRights>Yusuke Yoshihiro &copy; {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                              <SocialIcons>
                                   <SocialIconLink href="https://github.com/YusukeYoshihiro" target="_blank" aria-label="Github">
                                        <FaGithub />
                                   </SocialIconLink>
                                   <SocialIconLink href="https://www.linkedin.com/in/yusuke-yoshihiro-ab46491b2/" target="_blank" aria-label="Linkdin">
                                        <FaLinkedin />
                                   </ SocialIconLink>
                              </ SocialIcons>
                         </ SocialMediaWrap>
                    </ SocialMedia>

               </ FooterWrap>
          </FooterContainer>
     )
}

export default Footer;

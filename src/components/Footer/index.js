import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
     FooterContainer,
     FooterWrap,
     FooterTextWrap,
     AuthorName,
     WebsiteRights,
} from './FooterElements';
const Footer = () => {
     // https://www.npmjs.com/package/react-scroll
     const toggleHome = () => {
          scroll.scrollToTop();
     }

     return (
          <FooterContainer>
               <FooterWrap>
                    <FooterTextWrap>
                         <AuthorName to="/" onClick={toggleHome}>
                              Yusuke Yoshihiro
                         </AuthorName>
                         <WebsiteRights>Yusuke Yoshihiro &copy; {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                    </ FooterTextWrap>
               </ FooterWrap>
          </FooterContainer>
     )
}

export default Footer;

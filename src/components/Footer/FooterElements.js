import styled from 'styled-components';
import { Link } from 'react-router-dom';

// #86c232
// var(--color-dark)
export const FooterContainer = styled.footer`
  margin-top: -1px;
  background-color: var(--color-white);
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

// Social Media part 
export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;

`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

 @media screen and (max-width: 820px){
   flex-direction: column;
 }
`;

export const SocialLogo = styled(Link)`
  color: var(--color-green);
  justify-self: start;
  cursor: pointer;
  text-shadow: 0px 3px 0px #b2a98f,
                 0px 14px 10px rgba(0,0,0,0.15),
                 0px 24px 2px rgba(0,0,0,0.1),
                 0px 34px 30px rgba(0,0,0,0.1);
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const WebsiteRights = styled.small`
  color: var(--color-dark);
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  width: 240px;
  @media screen and (max-width:376px){
  justify-content: center;
  }
`;

export const SocialIconLink= styled.a`
 margin-right:15px;
 color:var(--color-green);
 font-size: 2.5rem;
 transition: all 0.2s ease-in-out;

 &:hover {
    transform: scale(1.5);
    transition: all 0.2s ease-in-out;
    color: #36af9a;
  }
`;









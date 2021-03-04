import styled from 'styled-components';
import { Link } from 'react-router-dom';

// #86c232
// #222629
export const FooterContainer = styled.footer`
  background-color: #222629;
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
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink= styled.a`
 color: #86c232;
 font-size: 24px;
 transition: all 0.2s ease-in-out;

 &:hover {
    transform: scale(1.5);
    transition: all 0.2s ease-in-out;
    color: #355EB4;
  }
`;









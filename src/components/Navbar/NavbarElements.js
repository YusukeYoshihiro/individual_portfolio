import styled from 'styled-components';
import {Link as LinkR } from 'react-router-dom';
import {Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
   background : ${({ scrollNav }) => (scrollNav ? 'var(--color-white)' : 'transparent')};
   height: 80px;
   margin-top: -80px;
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 1rem;
   position: sticky;
   top: 0;
   z-index: 10;

   // trigger for transition 
   @media screen and (max-width: 960px) {
     transition: 0.8s all ease;
   }
`;
export const NavbarContainer = styled.div`
   display: flex;
   justify-content: space-between;
   height: 80px;
   z-index: 1;
   width: 100%;
   padding: 0 24px;
   max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
   color: #fff;
   justify-self: flex-start;
   cursor: pointer;
   display: flex;
   align-items: center;
   margin-left: 24px;
   font-weight: bold;
   text-decoration: none; 

   @media screen and (max-width: 769px){
    h2{
        display:none;
     }   
   }
  
`; 

export const Img = styled.img`
  width: 44px;
  height: 70px;
`;


export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%); 
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px){
    display: none;
  }
 `
export const NavItem  = styled.li`
    height: 80px;
`;

export const NavLinks = styled(LinkS)`
   color: var(--color-green);
   display: flex;
   align-items: center;
   text-decoration: none;
   padding: 0 1rem;
   height: 100%;
   cursor: pointer;
   text-shadow:   0px 1px 0px #b2a98f;

  /* &.active{
    border-bottom: 3px solid var(--color-green);
  } */
    :hover {
    /* font-size: 1.05rem; */
    color: #36af9a;
    /* color: #4a196d; */
    text-shadow: 0px 1px 0px #b2a98f,         
                 0px 5px 10px rgba(0,0,0,0.15),
                 0px 10px 2px rgba(0,0,0,0.1),
                 0px 15px 30px rgba(0,0,0,0.1);     
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width :768px){
      display: none;
    }
`







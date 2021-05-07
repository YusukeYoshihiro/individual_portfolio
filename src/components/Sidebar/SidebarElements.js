import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';// https://react-icons.github.io/react-icons/search?q=fatime

export const SidebarContainer = styled.aside`
   position: fixed;
   z-index: 999;
   width: 100%;
   height: 100%;
   background: var(--color-white); 
   display: grid;
   align-items: center;
   top: 0;
   left: 0;
   transition: 0.3s ease-in-out;
   opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
   top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

// https://react-icons.github.io/react-icons/search?q=fatime
export const CloseIcon = styled(FaTimes)`
  color:var(--color-green);
`;

export const Icon = styled.div`
   position: absolute;
   top: 1.2rem;
   right: 1.5rem;
   background: transparent;
   font-size: 2rem;
   cursor: pointer;
   outline: none;
`;

export const SidebarWrapper = styled.div`
   color:var(--color-dark);
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template: 1fr;
  grid-template-rows: repeat( 5, 80px );
  text-align: center;

   @media screen  and ( max-width: 480px ){
     grid-template-rows: repeat( 5, 60px );
   }
`;


export const SidebarLink = styled(LinkS)`
  display: flex;
  align-self: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 1s ease-in-out;
  color: var(--color-green);
  cursor: pointer;
  
  p {
    position: relative;
    overflow: hidden;

    :hover {
    font-size: 1.7rem;
    color: #4a196d;
   }
   ::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color:var(--color-green);
    transform: translate(-100%, 0);
    transition: transform cubic-bezier(0.215, 0.61, 0.355, 1) 0.3s;
    }
  
    :hover::after {
    transform: translate(0, 0);
    }
  }
 
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled.button`
   border-radius: 50px;
   background:var(--color-green);
   white-space: nowrap;
   padding: 16px 64px;
   color: var(--color-white);
   font-size: 16px;
   outline: none;
   border: none;
   cursor: pointer;
   transition: all 0.2s ease-in-out;
   text-decoration: none;

   &:hover {
    transition: all 0.2s ease-in-out;
    border:solid 2px var(--color-green);
    background-color:#fff;
    color: var(--color-dark);
  }
`;









import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute
} from './SidebarElements';

const showResume = () => {
  window.open('https://drive.google.com/file/d/1Op4PlybKeO4Ua02NUODwH0zWBiQts-Tx/view?usp=sharing', '_blank')
}

const Sidebar = ({ isOpen, toggle }) => {
  return (
    < SidebarContainer isOpen={isOpen} onClick={toggle} >
      <Icon>
        <CloseIcon />
      </Icon>
      
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="home" onClick={toggle} ><p>Home</p></SidebarLink>
          <SidebarLink to="works" onClick={toggle} ><p>Portfolio</p></SidebarLink>
          <SidebarLink to="skills" onClick={toggle} ><p>Skills</p></SidebarLink>
          <SidebarLink to="about" onClick={toggle} ><p>About</p></SidebarLink>
          <SidebarLink to="contact" onClick={toggle} ><p>Contact</p></SidebarLink>
          </SidebarMenu>
      </SidebarWrapper>

      <SideBtnWrap>
         <SidebarRoute onClick={showResume}>Resume</SidebarRoute>
      </SideBtnWrap>

    </SidebarContainer>
  )
}

export default Sidebar;

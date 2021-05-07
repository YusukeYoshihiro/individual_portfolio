// Skills Part
import React from 'react'
import styled from 'styled-components'
import { ReactLogo } from '@styled-icons/fa-brands/ReactLogo';
import { Redux } from '@styled-icons/simple-icons/Redux';
import { Typescript } from '@styled-icons/simple-icons/Typescript';
import { Html5 } from '@styled-icons/fa-brands/Html5';
import { Css3Alt } from '@styled-icons/fa-brands/Css3Alt';
import { Sass } from '@styled-icons/fa-brands/Sass';
import { Javascript } from '@styled-icons/simple-icons/Javascript';
import { StyledComponents } from '@styled-icons/simple-icons/StyledComponents';
import { GitAlt } from '@styled-icons/fa-brands/GitAlt'
import { Adobexd } from '@styled-icons/simple-icons/Adobexd';
import { Figma } from '@styled-icons/simple-icons/Figma'
import { Adobephotoshop } from '@styled-icons/simple-icons/Adobephotoshop';



const StyledIcon = () => {
  return (
    <>
      <IconStyleWrapper >
        <SkillItem>
          <Html5
            data-aos="zoom-in"
            data-aos-anchor="#trigger-left"
          />
        </SkillItem>
        <SkillItem>
          <Css3Alt
            data-aos="zoom-in"
            data-aos-delay="100"
            data-aos-anchor="#trigger-left"
          />
        </SkillItem>
        <SkillItem>
          <Sass
            data-aos="zoom-in"
            data-aos-delay="250"
            data-aos-anchor="#trigger-left"
          />
        </SkillItem>
        <SkillItem>
          <Javascript
            data-aos="zoom-in"
            data-aos-delay="450"
            data-aos-anchor="#trigger-left"
          />
        </SkillItem>
        <SkillItem>
          <Typescript
            data-aos="zoom-in"
            data-aos-delay="650"
            data-aos-anchor="#trigger-left"
          />
        </SkillItem>
        <SkillItem>
          <ReactLogo
            data-aos="zoom-in"
            data-aos-delay="850"
            data-aos-anchor="#trigger-left"
          />
        </SkillItem>
        <SkillItem>
          <Redux
            data-aos="zoom-in"
            data-aos-delay="1050"
            data-aos-anchor="#trigger-left"
          />
        </SkillItem>
        <SkillItem>
          <StyledComponents
            data-aos="zoom-in"
            data-aos-delay="1250"
            data-aos-anchor="#trigger-left"
          />
        </SkillItem>
        <SkillItem>
          <Adobexd
            data-aos="zoom-in"
            data-aos-delay="1450"
            data-aos-anchor="#trigger-left"
          />
        </SkillItem>
        <SkillItem>
          <Adobephotoshop
            data-aos="zoom-in"
            data-aos-delay="1650"
            data-aos-anchor="#trigger-left"
          />
        </SkillItem>
        <SkillItem>
          <Figma
            data-aos="zoom-in"
            data-aos-delay="1850"
            data-aos-anchor="#trigger-left"
          />
        </SkillItem>
        <SkillItem>
          <GitAlt
            data-aos="zoom-in"
            data-aos-delay="2050"
            data-aos-anchor="#trigger-left"
          />
        </SkillItem>
      </IconStyleWrapper>
    </>
  )
}

export default StyledIcon;

// Styles for icons
const IconStyleWrapper = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns:repeat(4, 1fr);
    color: var(--color-green);
    @media screen and (min-width:1024px){
      display: flex;
    }

    @media screen and (min-width:768px){
      grid-template-columns:repeat(6, 1fr);
    }
   
`
const SkillItem = styled.li`
  width: 60px;
  margin: 10px auto;
`

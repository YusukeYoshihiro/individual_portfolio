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
import { Styledcomponents } from '@styled-icons/simple-icons/Styledcomponents';
import { GitAlt } from '@styled-icons/fa-brands/GitAlt';
import { Laravel} from '@styled-icons/fa-brands/Laravel';
import { Vuejs } from '@styled-icons/boxicons-logos/Vuejs';
import { Nextdotjs } from '@styled-icons/simple-icons/Nextdotjs';
import { Mysql } from '@styled-icons/simple-icons/Mysql';
import { Mongodb } from '@styled-icons/simple-icons/Mongodb';


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
          <Styledcomponents
            data-aos="zoom-in"
            data-aos-delay="450"
            data-aos-anchor="#trigger-left"
          />
        </SkillItem>
        <SkillItem>
          <Javascript
            data-aos="zoom-in"
            data-aos-delay="650"
            data-aos-anchor="#trigger-left"
          />
        </SkillItem>
        <SkillItem>
          <Typescript
            data-aos="zoom-in"
            data-aos-delay="850"
            data-aos-anchor="#trigger-left"
          />
        </SkillItem>
        <SkillItem>
          <ReactLogo
            data-aos="zoom-in"
            data-aos-delay="1050"
            data-aos-anchor="#trigger-left"
          />
        </SkillItem>
        <SkillItem>
          <Redux
            data-aos="zoom-in"
            data-aos-delay="1250"
            data-aos-anchor="#trigger-left"
          />
        </SkillItem>
        <SkillItem>
          <Nextdotjs
            data-aos="zoom-in"
            data-aos-delay="1450"
            data-aos-anchor="#trigger-left"
          />
        </SkillItem>
        <SkillItem>
          <Vuejs
            data-aos="zoom-in"
            data-aos-delay="1650"
            data-aos-anchor="#trigger-left"
          />
        </SkillItem>
        <SkillItem>
          <Laravel
            data-aos="zoom-in"
            data-aos-delay="1850"
            data-aos-anchor="#trigger-left"
          />
        </SkillItem>
        <SkillItem>
          <Mysql
            data-aos="zoom-in"
            data-aos-delay="2050"
            data-aos-anchor="#trigger-left"
          />
        </SkillItem>
        <SkillItem>
          <Mongodb
            data-aos="zoom-in"
            data-aos-delay="2250"
            data-aos-anchor="#trigger-left"
          />
        </SkillItem>
        <SkillItem>
          <GitAlt
            data-aos="zoom-in"
            data-aos-delay="2450"
            data-aos-anchor="#trigger-left"
          />
        </SkillItem>
      </IconStyleWrapper>
    </>
  )
}

export default StyledIcon;

// Styles for icons
// Mobile First Structure
const IconStyleWrapper = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns:repeat(4, 1fr);
    color: var(--color-green);
    @media screen and (min-width:768px){
      grid-template-columns:repeat(6, 1fr);
    }
    @media screen and (min-width:1024px){
      display: flex;
    }
`
const SkillItem = styled.li`
  width: 60px;
  margin: 10px auto;
`

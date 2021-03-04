// Skills Part
import React from 'react'
import styled from 'styled-components'
import { StyledIconBase } from '@styled-icons/styled-icon'
import { ReactLogo } from '@styled-icons/fa-brands/ReactLogo';
import { Redux } from '@styled-icons/simple-icons/Redux';
import { Typescript } from '@styled-icons/simple-icons/Typescript';
import { Html5 } from '@styled-icons/fa-brands/Html5';
import { Css3Alt } from '@styled-icons/fa-brands/Css3Alt';
import { Sass } from '@styled-icons/fa-brands/Sass';
import { Javascript } from '@styled-icons/simple-icons/Javascript';
import { StyledComponents } from '@styled-icons/simple-icons/StyledComponents';
import { GitAlt } from '@styled-icons/fa-brands/GitAlt'
import { Mongodb } from '@styled-icons/simple-icons/Mongodb';
import { Firebase } from '@styled-icons/boxicons-logos/Firebase';
import { Adobexd } from '@styled-icons/simple-icons/Adobexd';
import { Figma } from '@styled-icons/simple-icons/Figma'
import { Slack } from '@styled-icons/remix-fill/Slack';
import { Adobephotoshop } from '@styled-icons/simple-icons/Adobephotoshop';



const StyledIcon = () => {
  return (
    <>
        <IconStyleWrapper >
          <Html5
            data-aos="zoom-in"
            data-aos-anchor="#trigger-left"
          />
          <Css3Alt
            data-aos="zoom-in"
            data-aos-delay="100"
            data-aos-anchor="#trigger-left"
          />
          <Sass
            data-aos="zoom-in"
            data-aos-delay="250"
            data-aos-anchor="#trigger-left"
          />
          <Javascript
            data-aos="zoom-in"
            data-aos-delay="450"
            data-aos-anchor="#trigger-left"
          />
          <Typescript
            data-aos="zoom-in"
            data-aos-delay="650"
            data-aos-anchor="#trigger-left"
          />
          <br />
          <ReactLogo
            data-aos="zoom-in"
            data-aos-delay="850"
            data-aos-anchor="#trigger-left"
          />
          <Redux
            data-aos="zoom-in"
            data-aos-delay="1050"
            data-aos-anchor="#trigger-left"
          />
          <StyledComponents
            data-aos="zoom-in"
            data-aos-delay="1250"
            data-aos-anchor="#trigger-left"
          />
          <Adobexd
            data-aos="zoom-in"
            data-aos-delay="1450"
            data-aos-anchor="#trigger-left"
          />
          <Adobephotoshop
            data-aos="zoom-in"
            data-aos-delay="1650"
            data-aos-anchor="#trigger-left"
          />
          <br />
          <Figma
            data-aos="zoom-in"
            data-aos-delay="1850"
            data-aos-anchor="#trigger-left"
          />
          <GitAlt
            data-aos="zoom-in"
            data-aos-delay="2050"
            data-aos-anchor="#trigger-left"
          />
          <Mongodb
            data-aos="zoom-in"
            data-aos-delay="2250"
            data-aos-anchor="#trigger-left"
          />
          <Firebase
            data-aos="zoom-in"
            data-aos-delay="2450"
            data-aos-anchor="#trigger-left"
          />
          <Slack
            data-aos="zoom-in"
            data-aos-delay="2650"
            data-aos-anchor="#trigger-left"
          />
        </IconStyleWrapper>
    </>
  )
}

export default StyledIcon;

// Styles for icons
export const IconStyleWrapper = styled.div`
  ${StyledIconBase} {
    margin-right: 15px;
    color:#86c232;
    width: 15%;
    /* icon styles go here */
  }
`


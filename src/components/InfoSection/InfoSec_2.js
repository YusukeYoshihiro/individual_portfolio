// Skills Part
import React from 'react'
import StyledIcon from '../StyledIcon/StyledIcon'

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  ColumnSkill,
  ColumnSkill2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  SkillsWrap,
  ImgWrapSkill,
} from './InfoElements';

const InfoSec2 = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id} >
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            
            <ColumnSkill data-aos="fade-right" data-aos-duration="1000">
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>
                  <SkillsWrap darkText={darkText}>
                    <div data-aos="zoom-in">
                      <h3>&lt; Languages /&gt;</h3><br />
                      <p> HTML5, CSS3, SCSS/SASS, <br />JavaScript(ES6), TypeScript</p><br />
                    </div>

                    <div data-aos="zoom-in" data-aos-delay="100">
                      <h3>&lt; Frameworks ＆ Libraries /&gt;</h3><br />
                      <p> React, React-Redux, React-Hooks, <br />styled-components, Chart.js, JQuery, <br />Node.js, Express.js</p><br />
                    </div>

                    <div data-aos="zoom-in" data-aos-delay="300" id="trigger-left">
                      <h3>&lt; Others ＆ Tools /&gt;</h3><br />
                      <p> Git, Figma, XD, Photoshop, 
                      <br/>RESTAPI, JSON, Webpack
                      <br />MongoDB, Firebase, Heroku, Postman, Slack
                      
                      </p>
                    </div>
                  </SkillsWrap>
                </Subtitle>
              </TextWrapper>
            </ColumnSkill>

            <ColumnSkill2 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="50">
              <ImgWrapSkill >
                {/* Styled Icon Part */}
                <StyledIcon />
              </ImgWrapSkill>
            </ColumnSkill2>

          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSec2;



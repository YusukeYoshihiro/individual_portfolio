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
  SkillsList
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
                      <SkillsList>
                        <li> HTML5</li>
                        <li> CSS3</li>
                        <li> Javascript(ES6)</li>
                        <li> Typescript</li>
                        <li> SCSS/SASS</li>
                        <li> PHP</li>
                      </SkillsList>
                    </div>

                    <div data-aos="zoom-in" data-aos-delay="100">
                      <h3>&lt; Frameworks ＆ Libraries /&gt;</h3><br />
                      <SkillsList>
                        <li> React</li>
                        <li> React-Redux</li>
                        <li> React-Hooks</li>
                        <li> jQuery</li>
                        <li> styled-components</li>
                        <li> Node.js/Express.js</li>
                      </SkillsList>
                    </div>

                    <div data-aos="zoom-in" data-aos-delay="300" id="trigger-left">
                      <h3>&lt; Others /&gt;</h3><br />
                      <SkillsList>
                        <li> RESTfulAPI</li>
                        <li> mySQL</li>
                        <li> JSON</li>
                        <li> Webpack</li>
                        <li> Photoshop</li>
                        <li> Illustrator</li>
                        <li> XD</li>
                        <li> Figma</li>
                        <li> MongoDB</li>
                        <li> Firebase</li>
                        <li> Heroku</li>
                        <li> AWS</li>
                        <li> Slack</li>
                        <li> Git</li>
                      </SkillsList>
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



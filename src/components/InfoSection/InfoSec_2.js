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
                      <h3>&lt; Proficiency /&gt;</h3><br />
                      <SkillsList>
                        <li> React.js</li>
                        <li> Javascript(ES6)</li>
                        <li> HTML5/CSS3</li>
                        <li> SCSS/SASS</li>
                        <li> styled-components</li>
                      </SkillsList>
                    </div>

                    <div data-aos="zoom-in" data-aos-delay="100">
                      <h3>&lt; Front-End ＆ Libraries /&gt;</h3><br />
                      <SkillsList>
                        <li> HTML5/CSS3</li>
                        <li> Javascript(ES6)</li>
                        <li> jQuery</li>
                        <li> Chart.js/D3.js</li>
                        <li> React.js</li>
                        <li> React-Redux</li>
                        <li> Typescript</li>
                      </SkillsList>
                    </div>

                    <div data-aos="zoom-in" data-aos-delay="300" id="trigger-left">
                      <h3>&lt; Others /&gt;</h3><br />
                      <SkillsList>
                        <li>Java</li>
                        <li> Python/Django</li>
                        <li> Node.js/Express.js</li>
                        <li> XD</li>
                        <li> Figma</li>
                        <li> Photoshop</li>
                        <li> Illustrator</li>
                        <li> RESTfulAPI</li>
                        <li>GraphQL</li>
                        <li> mySQL</li>
                        <li> MongoDB</li>
                        <li> Firebase</li>
                        <li> AWS</li>
                        <li> Git/CLI</li>
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



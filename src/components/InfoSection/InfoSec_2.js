// Skills Part
import React from 'react'
import StyledIcon from '../StyledIcon/StyledIcon'

import {
  InfoContainer,
  ColumnSkill,
  ColumnSkill2,
  TopLine,
  Heading,
  SkillsWrap,
  ImgWrapSkill,
  SkillsList,
  InfoSkillCtn,
  SkillTitleCtn
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
        <InfoSkillCtn >
          <div imgStart={imgStart}>
            <ColumnSkill data-aos="fade-right" data-aos-duration="1000">
               <SkillTitleCtn>
                  <TopLine>{topLine}</TopLine>
                  <Heading lightText={lightText}>{headline}</Heading>
               </SkillTitleCtn>
                <div darkText={darkText}>
                  <SkillsWrap darkText={darkText}>
                    <div data-aos="zoom-in">
                      <h3>&lt; Programming Languages /&gt;</h3><br />
                      <SkillsList>
                        <li> HTML</li>
                        <li> CSS</li>
                        <li> Javascript</li>
                        <li> Typescript</li>
                        <li> PHP</li>
                      </SkillsList>
                    </div>

                    <div data-aos="zoom-in" data-aos-delay="100">
                      <h3>&lt; Frameworks ＆ Libraries /&gt;</h3><br />
                      <SkillsList>
                        <li> jQuery</li>
                        <li> React.js</li>
                        <li> React-Redux</li>
                        <li> Vue.js</li>
                        <li> Typescript</li>
                        <li> Laravel</li>
                        <li> SCSS</li>
                        <li> styled-components</li>
                        <li> tailwindcss</li>
                      </SkillsList>
                    </div>

                    <div data-aos="zoom-in" data-aos-delay="300" id="trigger-left">
                      <h3>&lt; Others /&gt;</h3><br />
                      <SkillsList>
                        <li> Node.js/Express.js</li>
                        <li> RESTfulAPI</li>
                        <li> MySQL</li>
                        <li> MongoDB</li>
                        <li> Firebase</li>
                        <li> AWS</li>
                        <li> Git/CLI</li>
                      </SkillsList>
                     </div>
                  </SkillsWrap>
                </div>
            </ColumnSkill>

            <ColumnSkill2 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="50">
              <ImgWrapSkill >
                {/* Styled Icon Part */}
                <StyledIcon />
              </ImgWrapSkill>
            </ColumnSkill2>

          </div>
        </InfoSkillCtn>
      </InfoContainer>
    </>
  )
}

export default InfoSec2;



import React from 'react';
// import { Button } from '../../Features/ButtonScrollStyles';
import workImg from '../../assets/images/FABE_LOGO.png';
import { workDescFour } from '../../Data/data';
// import BackToPages from '../../Features/BackToPages'

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  // BtnWrap,
  ImgWrap,
  Img,
  LanguageList,
} from './WorkDescElements';

const ecommerceImg = workImg;

const WorkDesc4 = () => {

  const {
    lightBg,
    id,
    imgStart,
    topLine,
    lightText,
    headline,
    darkText,
    description,
    // buttonLabel,
    alt,
    // primary,
    // dark,
    // dark2,
  } = workDescFour;
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id} >
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1 >
            <ImgWrap>
                <Img src={ecommerceImg} alt={alt} />
              </ImgWrap>
            </Column1>

            <Column2 >
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>
                  {description}
                  <br /><br />
                  <h3>&lt; Front-End /&gt;</h3><br />
                  <LanguageList>
                    <li>React</li>
                    <li>React-Redux</li>
                    <li>Styled-Components</li>
                    <li>Material-UI</li>
                  </LanguageList>
                  <h3>&lt; Backend ＆ Others /&gt;</h3><br />
                  <LanguageList>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>stripe(payment)</li>
                    <li>MongoDB</li>
                    <li>Heroku</li>
                    <li>Heroku</li>
                    <li>Git</li>
                  </LanguageList>
                </Subtitle>
                {/* <BtnWrap>
                  <Button
                    to='home'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                    onClick={() => {
                      // window.open(URL[1].website.ecommerce, '_blank')
                    }}
                  >
                    {buttonLabel}
                  </Button>
                  <BackToPages />
                </BtnWrap> */}
              </TextWrapper>
            </Column2>

          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default WorkDesc4;
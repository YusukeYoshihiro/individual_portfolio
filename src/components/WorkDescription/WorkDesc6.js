import React from 'react';
// import { Button } from '../ButtonScrollStyles';
import workImg from '../../assets/images/portfolioImg.png';
import { workDescSix, ButtonRepository} from '../../Data/data';
import BackToPages from '../../Features/BackToPages';
import { URL } from '../../Data/showRepository';
import { Button } from '../../Features/ButtonScrollStyles';

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
  ImgWrap,
  Img,
  BtnWrap,
  LanguageList,
} from './WorkDescElements';


const portfolioImg = workImg;

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
    alt,
    primary,
    dark,
    dark2,
    buttonLabel
  } = workDescSix;

  const { buttonLabelRepo } =  ButtonRepository;
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id} >
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1 >
            <ImgWrap>
                <Img src={portfolioImg} alt={alt} />
              </ImgWrap>
             
             
            </Column1>

            <Column2 >
            <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>
                  {description}
                  <br /><br />
                  <h3>&lt; Frameworks &amp; Libraries /&gt;</h3><br />
                  <LanguageList>
                    <li>React</li>
                    <li>React-Hooks</li>
                    <li>Styled-Components</li>
                    <li>Material-UI</li>
                    <li>AOS</li>
                  </LanguageList>
                  <h3>&lt; Others /&gt;</h3><br />
                  <LanguageList>
                    <li>XD</li>
                    <li>Photoshop</li>
                    <li>unDraw</li>
                    <li>Git</li>
                  </LanguageList>
                </Subtitle>
                <BtnWrap>
                <Button
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                    onClick={() => window.open(URL[1].website.portfolio, '_blank')}
                  > 
                    {buttonLabel}
                  </Button>
                  <Button
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                    onClick={() => window.open(URL[0].repository.portfolio, '_blank')}
                  > 
                    {buttonLabelRepo}
                  </Button>
                  <BackToPages />
                </BtnWrap>
              </TextWrapper>
            </Column2>

          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default WorkDesc4;
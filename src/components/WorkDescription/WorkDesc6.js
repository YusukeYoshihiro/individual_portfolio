import React from 'react';
// import { Button } from '../ButtonScrollStyles';
import workImg from '../../assets/images/portfolioImg.png';
import { workDescSix } from '../../Data/data';
import BackToPages from '../../Features/BackToPages'

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
  } = workDescSix;
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id} >
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1 >
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>
                  {description}
                  <br /><br />
                  <h3>&lt; Languages /&gt;</h3><br />
                  <p>ES6, React.js, React-Hooks, Styled-Components</p><br />

                  <h3>&lt; Tools /&gt;</h3><br />
                  <p>AOS, Material-UI, Styled Icon</p>
                </Subtitle> 
              </TextWrapper>
            </Column1>

            <Column2 >
              <ImgWrap>
                <Img src={portfolioImg} alt={alt} />
              </ImgWrap>
              <br /><br />
              <BackToPages />
            </Column2>

          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default WorkDesc4;
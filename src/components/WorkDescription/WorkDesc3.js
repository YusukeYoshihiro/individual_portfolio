import React from 'react'
import { Button } from '../../Features/ButtonScrollStyles';
import  workImg from '../../assets/images/MovieApp.png';
import { workDescThree, ButtonRepository } from '../../Data/data';
import BackToPages from '../../Features/BackToPages';
import { repoURL } from '../../Data/showRepository';

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
  BtnWrap, 
  ImgWrap, 
  Img,
} from  './WorkDescElements';

const visitWeb = () => {
  window.open('https://netfim-projects.yusukeyoshihiro.vercel.app', '_blank')
}

const movieAppImg = workImg;

const WorkDesc3 = () => {

  const {
    lightBg,
    id,
    imgStart,
    topLine,
    lightText,
    headline,
    darkText,
    description,
    buttonLabel,
    alt,
    primary,
    dark,
    dark2,
    } = workDescThree;

    const { buttonLabelRepo } =  ButtonRepository;

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
                  <br/><br/>
                  <h3>&lt; Languages /&gt;</h3><br/>
                   <p> React.js, Compound-Components, Styled-Components, Json/Data</p><br/>

                   <h3>&lt; Database ＆ Tools /&gt;</h3><br/>
                   <p> Firebase, Diagrams.net, XD</p>
                </Subtitle>
                <BtnWrap>
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
                    onClick={visitWeb}
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
                    onClick={() => window.open(repoURL[0].movieApp, '_blank')}
                  > 
                    {buttonLabelRepo}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>

            <Column2 >
              <ImgWrap>
                <Img src={movieAppImg} alt={alt} />
              </ImgWrap>
              <br/><br/>
             <BackToPages />
            </Column2>
              
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default WorkDesc3;
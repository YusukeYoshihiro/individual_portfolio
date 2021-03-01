import React, { useState } from 'react'
import { Button } from '../ButtonScrollStyles';
import  workImg from '../../assets/images/MockImgLacrosse.png';
import { workDescTwo } from '../../components/InfoSection/Data';
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

import {
  ArrowBack,
  ArrowLeft,
} from '../ArrowIcon/ArrowIconStyles';

const visitWeb = () => {
  window.open('https://yusukeyoshihiro.github.io/lacrosseproject', '_blank')
}

const showCertification = () => {
  window.open('https://drive.google.com/file/d/1tjpMVCE-7F7Lqho8FFHXVW2wSxfdRpS8/view?usp=sharing', '_blank')
}

const backToWorks = () => {
  window.history.back();
}

const lacrosseImg = workImg;

const WorkDesc2 = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover)
  }

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
    buttonLabel2,
    alt,
    primary,
    dark,
    dark2,
    } = workDescTwo;

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
                   <p> HTML, CSS, ES6, JQuery, JAVA, PHP</p><br/>

                   <h3>&lt; Database ＆ Tools /&gt;</h3><br/>
                   <p> mySQL, Figma, Google-Form</p>
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
                    onClick={showCertification}
                  > 
                    {buttonLabel2}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>

            <Column2 >
              <ImgWrap>
                <Img src={lacrosseImg} alt={alt} />
              </ImgWrap>
              <br/><br/>
              <Button
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                primary={primary ? 1 : 0}
                dark={dark ? 1 : 0}
                dark2={dark2 ? 1 : 0}
                onClick={backToWorks}
                onMouseEnter={onHover}
                onMouseLeave={onHover}
              >
                {hover ? <ArrowBack /> : <ArrowLeft />} &nbsp; Go Back
              </Button>

            </Column2>
           
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default WorkDesc2;
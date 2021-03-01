import React from 'react'
import { Button } from '../ButtonScrollStyles';
import workImg from '../../assets/images/MockImgCricket.png';
import { extraInfo } from '../../components/InfoSection/Data';

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
} from  './ExtrainfoElement';

const backToWorks = () => {
   window.history.back();
}

const cricketImg = workImg;

const ExtraInfo = () => {
  const {
    lightBg,
    id,
    imgStart,
    topLine,
    lightText,
    headline,
    darkText,
    description,
    buttonLabel3,
    alt,
    primary,
    dark,
    dark2,
    } = extraInfo;

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
                  {/* <br/><br/>
                  <h3>&lt; Languages /&gt;</h3><br/>
                   <p> HTML, CSS, ES6, JQuery, JAVA</p><br/>

                   <h3>&lt; Database ＆ Tools /&gt;</h3><br/>
                   <p> mySQL, Figma, Google-Form</p> */}
                </Subtitle>
              </TextWrapper>
            </Column1>

            <Column2 >
              <ImgWrap>
                <Img src={cricketImg} alt={alt} />
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
                  > 
                    {buttonLabel3}
                  </Button>
            </Column2>

          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default ExtraInfo;
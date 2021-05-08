import React from 'react'
import { Button } from '../../Features/ButtonScrollStyles';
import  workImg from '../../assets/images/Lacrosse_works.png';
import { workDescTwo } from '../../Data/data';
import BackToPages from '../../Features/BackToPages';
import { URL } from '../../Data/showRepository';

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
  LanguageList,
} from  './WorkDescElements';

const showCertification = () => {
  window.open('https://drive.google.com/file/d/1tjpMVCE-7F7Lqho8FFHXVW2wSxfdRpS8/view?usp=sharing', '_blank')
}

const lacrosseImg = workImg;

const WorkDesc2 = () => {
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
        <div >
          <TopLine>{topLine}</TopLine>
          <Heading lightText={lightText}>{headline}</Heading>
          <p style={{color:'var(--color-dark)'}}>{description}</p>
          </div>
          <InfoRow imgStart={imgStart}>
            <Column1 >
            <ImgWrap>
                <Img src={lacrosseImg} alt={alt} />
              </ImgWrap>
            </Column1>

            <Column2 >
              <TextWrapper>
                <Subtitle darkText={darkText}>
                  <h3>&lt; Languages /&gt;</h3><br/>
                  <LanguageList>
                    <li> HTML5</li>
                    <li> CSS3</li>
                    <li> Javascript(ES6)</li>
                    <li> JQuery</li>
                    <li> php</li>
                  </LanguageList>
                   
                   <h3>&lt; Database ＆ Tools /&gt;</h3><br/>
                   <LanguageList>
                    <li> mySQL</li>
                    <li> Bootstrap5</li>
                    <li> WEB API</li>
                    <li> Figma</li>
                    <li> XD</li>
                    <li> Git</li>
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
                    onClick={() => {
                      window.open(URL[1].website.lacrosse, '_blank')
                    }}
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
                  <BackToPages />
              </TextWrapper>
            </Column2>
           
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default WorkDesc2;
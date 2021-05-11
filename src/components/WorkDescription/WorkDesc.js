import React from 'react'
import { Button } from '../../Features/ButtonScrollStyles';
import workImg from '../../assets/images/Cricket_Logo.png';
import { workDescOne } from '../../Data/data';
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
  LanguageList
} from './WorkDescElements';
const cricketImg = workImg;

const WorkDesc = () => {
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
  } = workDescOne;

  // const { buttonLabelRepo } = ButtonRepository;


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
                <Img src={cricketImg} alt={alt} />
              </ImgWrap>
            </Column1>

            <Column2 >
              <TextWrapper>
                {/* <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading> */}
                <Subtitle darkText={darkText}>
                  {/* {description} */}
                  <h3>&lt; Languages /&gt;</h3><br />
                  <LanguageList>
                    <li> HTML5</li>
                    <li> CSS3</li>
                    <li> Javascript(ES6)</li>
                    <li> JQuery</li>
                    <li> php</li>
                  </LanguageList>

                  <h3>&lt; Database ＆ Tools /&gt;</h3><br />
                  <LanguageList>
                    <li> mySQL</li>
                    <li> Bootstrap5</li>
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
                      window.open(URL[1].website.cricket, '_blank')
                    }}
                  >
                    {buttonLabel}
                  </Button>
                  {/* <Button
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                    onClick={() => window.open(URL[0].repository.cricket, '_blank')}
                  >
                    {buttonLabelRepo}
                  </Button> */}
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

export default WorkDesc;
import React from 'react';
import { Button } from '../../Features/ButtonScrollStyles';
import workImg from '../../assets/images/Covid19_mockup.png';
import { workDescFive, ButtonRepository } from '../../Data/data';
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
} from './WorkDescElements';

const covidImg = workImg;

const WorkDesc5 = () => {
  
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
  } = workDescFive;

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
                  <br /><br />
                  <h3>&lt; Frameworks &amp;Libraries /&gt;</h3><br />
                  <LanguageList>
                    <li>Typescript</li>
                    <li>React.js</li>
                    <li>Redux-Toolkit</li>
                    <li>Chart.js</li>
                    <li>styled-components</li>
                    <li>Material-UI</li>
                  </LanguageList>

                  <h3>&lt; Others /&gt;</h3><br />
                  <LanguageList>
                    <li>
                      <a href="https://covid19api.com">
                        A free API for data on the Coronavirus
                      </a>
                    </li>
                    <li>Git</li>
                  </LanguageList>
                  
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
                    onClick={() => window.open(URL[1].website.covid19, '_blank')}
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
                    onClick={() => window.open(URL[0].repository.covid19, '_blank')}
                  > 
                    {buttonLabelRepo}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>

            <Column2 >
              <ImgWrap>
                <Img src={covidImg} alt={alt} />
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

export default WorkDesc5;
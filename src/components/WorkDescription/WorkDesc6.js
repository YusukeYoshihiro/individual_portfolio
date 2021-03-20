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
                </BtnWrap>
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
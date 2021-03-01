import React, { useState } from 'react';
import { Button } from '../ButtonScrollStyles';
import workImg from '../../assets/images/FABE_LOGO.png';
import { workDescFour } from '../../components/InfoSection/Data';

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
} from './WorkDescElements';

import {
  ArrowBack,
  ArrowLeft,
} from '../ArrowIcon/ArrowIconStyles';

const visitWeb = () => {
  window.open('', '_blank')
}

const backToWorks = () => {
  window.history.back();
}

const ecommerceImg = workImg;

const WorkDesc4 = () => {
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
    buttonLabel3,
    alt,
    primary,
    dark,
    dark2,
  } = workDescFour;
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
                  <p> React, React-Redux, Styled-Components, compound components</p><br />

                  <h3>&lt; Database ＆ Tools /&gt;</h3><br />
                  <p> Firebase, Apple-Pay system, Figma</p>
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
                </BtnWrap>
              </TextWrapper>
            </Column1>

            <Column2 >
              <ImgWrap>
                <Img src={ecommerceImg} alt={alt} />
              </ImgWrap>
              <br /><br />
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

export default WorkDesc4;
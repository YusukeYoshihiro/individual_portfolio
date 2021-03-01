import React from 'react'
// import styled from 'styled-components';
// import { Link } from 'react-router-dom'
import { Button } from '../ButtonScrollStyles'
import AboutMeImg from '../../assets/images/about_meImg.png';
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
} from './InfoElements';

const  myImg  = AboutMeImg;

const showResume = () => {
  window.open('https://drive.google.com/file/d/1Op4PlybKeO4Ua02NUODwH0zWBiQts-Tx/view?usp=sharing', '_blank')
}

const InfoSec = ({
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
  buttonLabel,
}) => {

  return (
    <>
      <InfoContainer lightBg={lightBg} id={id} >
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1 data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="50">
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                  {/* <LinkToExtraInfo
                    to={'/extraInfo'}
                  > 
                    More
                  </LinkToExtraInfo> */}
                  <Button
                    onClick={showResume}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                  > 
                    {buttonLabel}
                  </Button>
              </TextWrapper>
            </Column1>

            <Column2 data-aos="fade-down" data-aos-duration="1000">
              <ImgWrap>
                <Img src={myImg} alt={alt} />
              </ImgWrap>
            </Column2>

          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSec;

//        ***** Styles for LinkToExtraInfo(Button)
// export const LinkToExtraInfo = styled(Link)`
//   text-decoration: none;
//   border-radius: 50px;
//   background: #01BF71;
//   white-space: nowrap;
//   padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
//   color: #fff;
//   font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
//   outline: none;
//   border: none;
//   cursor: pointer;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   transition: all 0.2s ease-in-out;
//   margin-top: 15px;
//   width: 200px;

//   &:hover {
//     transition: all 0.2s ease-in-out;
//     background: #fff ;
//     color: #010606;
//   }
// `;

import React from 'react'
import { Button } from '../../Features/ButtonScrollStyles'
import AboutMeImg from '../../assets/images/about_meImg.png';
import { FaGithub, FaLinkedin} from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
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
  SocialIcons,
  SocialIconLink,
} from './InfoElements';

const myImg = AboutMeImg;

const showResume = () => {
  window.open('https://drive.google.com/file/d/1Op4PlybKeO4Ua02NUODwH0zWBiQts-Tx/view?usp=sharing', '_blank')
}

const mailtoUrl = 'mailto:yusuke.10.25.61@gmail.com';
const mailTo = () => {
  window.location.href = mailtoUrl;
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
            <Column1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>
                  <h2>
                    {description}
                  </h2>
                </Subtitle>
                <SocialIcons>
                  <SocialIconLink href="https://github.com/YusukeYoshihiro" target="_blank" aria-label="Github">
                    <FaGithub />
                  </SocialIconLink>
                  <SocialIconLink href="https://www.linkedin.com/in/yusuke-yoshihiro-ab46491b2/" target="_blank" aria-label="Linkdin">
                    <FaLinkedin />
                  </ SocialIconLink>
                  <SocialIconLink onClick={mailTo} aria-label="Mail">
                    <AiOutlineMail />
                  </ SocialIconLink>


                </ SocialIcons>
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


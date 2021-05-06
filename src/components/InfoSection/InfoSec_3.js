// Contact Pert
import React, { useState } from 'react'
import { Button } from '../../Features/ButtonScrollStyles'
import AboutMeImg from '../../assets/images/about_me.png';
import { SocialIconLink, SocialIcons } from '../Footer/FooterElements';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  ColumnContact,
  ColumnContact2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle3,
  BtnWrap,
  ContactImgWrap,
  Img
} from './InfoElements';


import {
  ArrowForward,
  ArrowRight
} from '../../Features/ArrowIconStyles';

const myImg = AboutMeImg;

const mailtoUrl = 'mailto:yusuke.10.25.61@gmail.com';

const mailTo = () => {
  window.location.href = mailtoUrl;
}


const InfoSec_3 = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  email,
  // img,
  alt,
 
}) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper >
          <InfoRow imgStart={imgStart}>
            <ColumnContact data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle3
                  darkText={darkText}
                  onClick={mailTo}
                >
                  {email}
                </Subtitle3>
                <SocialIcons>
                  <SocialIconLink href="https://github.com/YusukeYoshihiro" target="_blank" aria-label="Github">
                    <FaGithub />
                  </SocialIconLink>
                  <SocialIconLink href="https://www.linkedin.com/in/yusuke-yoshihiro-ab46491b2/" target="_blank" aria-label="Linkdin">
                    <FaLinkedin />
                  </ SocialIconLink>

                </ SocialIcons><br />
                <BtnWrap>
                  <Button
                    onClick={mailTo}
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary='true'
                    dark='true'
                  >
                    Contact Me! {hover ? <ArrowForward /> : <ArrowRight />}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </ColumnContact >

            <ColumnContact2 data-aos="fade-down" data-aos-duration="1000">
              <ContactImgWrap>
                <Img src={myImg} alt={alt} />
              </ContactImgWrap>
            </ColumnContact2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSec_3;

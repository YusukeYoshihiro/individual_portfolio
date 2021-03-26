// Contact Pert
import React from 'react'
import { Button } from '../../Features/ButtonScrollStyles'
import AboutMeImg from '../../assets/images/about_me.png';
import { SocialIconLink, SocialIcons } from '../Footer/FooterElements';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import BgImg from '../../assets/images/mountain_bgImg.png';



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
  buttonLabel,
  // img,
  alt,
  primary,
  dark,
  dark2
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id} style={{background:` url(${BgImg}) no-repeat center center`, backgroundSize:"cover", paddingBottom:'0'}}>
        <InfoWrapper style={{backgroundImage: 'linear-gradient(180deg,transparent,rgba(65,65,65,.45),#222629)'}}>
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
                  <SocialIconLink href="https://www.facebook.com/" target="_blank" aria-label="Facebook">
                    <FaFacebook />
                  </SocialIconLink>
                  <SocialIconLink href="https://www.instagram.com/?hl=ja" target="_blank" aria-label="Instagram">
                    <FaInstagram />
                  </SocialIconLink>
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
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
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

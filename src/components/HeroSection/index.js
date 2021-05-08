import React, { useState } from 'react';
import Ityped from '../../Features/Ityped';
import { Button } from '../../Features/ButtonScrollStyles';
import AboutMeImg from '../../assets/images/about_me.png'
import { Link } from 'react-scroll';
import {
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  HeroImgCtn,
} from './HeroElements';

import {
  ArrowForward,
  ArrowRight
} from '../../Features/ArrowIconStyles';

const TopImg = AboutMeImg;

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover)
  }


  return (
    <HeroContainer id="home">
      <HeroContent >
        <HeroH1 data-aos="zoom-in" data-aos-delay="500">
          I'm <strong>Yusuke Yoshihiro</strong>,
        <br />Front-End Developer,<br />
        based in Vancouver.
        </HeroH1>
        <HeroP data-aos="zoom-in" data-aos-delay="700">
          Love
          <Ityped />
        </HeroP>
        <HeroBtnWrapper data-aos="zoom-in" data-aos-delay="900">
          <Button
            // onClick={showResume}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'
          >  
            <Link
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
            >
              Check it Out ! {hover ? <ArrowForward /> : <ArrowRight />}
            </Link>
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
      <HeroImgCtn 
        data-aos="flip-up" 
        data-aos-delay="1000"
        data-aos-duration="1000"
      >
        <img alt="topImage" src={TopImg} />
      </HeroImgCtn>
    </HeroContainer>
  )
}

export default HeroSection

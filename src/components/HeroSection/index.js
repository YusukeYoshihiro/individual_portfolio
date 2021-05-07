import React, { useState } from 'react';
// import Video from '../../videos/video.mp4';
import Ityped from '../../Features/Ityped';
import { Button } from '../../Features/ButtonScrollStyles';
import {
  HeroContainer,
  HeroBg,
  // VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
} from './HeroElements';

import {
  ArrowForward,
  ArrowRight
} from '../../Features/ArrowIconStyles';


const showResume = () => {
  window.open('https://drive.google.com/file/d/1Op4PlybKeO4Ua02NUODwH0zWBiQts-Tx/view?usp=sharing', '_blank')
}

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover)
  }

  
  return (
    <HeroContainer id="home">
      <HeroBg>
        {/* <VideoBg autoPlay loop muted src={Video} type="video/mp4" /> */}
      </HeroBg>
      <HeroContent >
        <HeroH1 data-aos="zoom-in" data-aos-delay="500"> 
        I'm <strong>Yusuke Yoshihiro</strong>, 
        <br/>Front-End Developer,<br/>
        based in Vancouver.
        </HeroH1>
        <HeroP data-aos="zoom-in" data-aos-delay="700"> 
          Love 
          <Ityped />
        </HeroP>
        <HeroBtnWrapper>
          <Button
          onClick={showResume}
          onMouseEnter={onHover}
          onMouseLeave={onHover}
          primary='true'
          dark='true'
          // data-aos="zoom-in" data-aos-delay="900"
          >
            Check it Out ! {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection

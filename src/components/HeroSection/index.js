import React, { useState } from 'react';
import { Button } from '../../Features/ButtonScrollStyles';
import AboutMeImg from '../../assets/images/about_me.png'
import { Link } from 'react-scroll';
import {
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroBtnWrapper,
  HeroImgCtn,
  HeroUl,
  HeroAnimateCtn,
  ScrollLink
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
          Hi, I'm <br/><strong>Yusuke Yoshihiro</strong>,
          <HeroAnimateCtn>
            <HeroUl >
              <li><h2>Front-End Developer,</h2></li>
              <li><h2>React Developer,</h2></li>
              <li><h2>Team Player,</h2></li>
              <li><h2>Motivated Learner,</h2></li>
              <li><h2>Entrepreneurship,</h2></li>
              <li><h2>Hockey Lover,</h2></li>
            </HeroUl>
          </HeroAnimateCtn>
          based in Vancouver.
        </HeroH1>
        <p data-aos="zoom-in" data-aos-delay="750">
          Front-end | React | Typescript | Responsible Design 
        </p>

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
        data-aos="zoom-in" data-aos-delay="1000"
      >
        <img alt="topImage" src={TopImg} />
      </HeroImgCtn>
      <ScrollLink
       to='works'
       smooth={true}
       duration={500}
       spy={true}
       exact='true'
       offset={-80}
      >
        <span></span><span></span>Scroll To See More
      </ScrollLink>
    </HeroContainer>
  )
}

export default HeroSection

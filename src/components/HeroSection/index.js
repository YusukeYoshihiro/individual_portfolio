import React, { useState } from 'react';
import AboutMeImg from '../../assets/images/yusuke_hero_section_logo.png'
import {
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroBtnWrapper,
  HeroImgCtn,
  HeroUl,
  HeroAnimateCtn,
  ScrollLink,
  LinkToAbout
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
              <li><h2>WEB Application Developer,</h2></li>
              <li><h2>React Developer,</h2></li>
              <li><h2>Laravel Developer,</h2></li>
              <li><h2>Team Player,</h2></li>
              <li><h2>Motivated Learner,</h2></li>
              <li><h2>Have Entrepreneurship,</h2></li>
              <li><h2>Hockey Lover,</h2></li>
            </HeroUl>
          </HeroAnimateCtn>
          <h4>based in Tokyo.</h4>
        </HeroH1>
        <p data-aos="zoom-in" data-aos-delay="750">
          Front-end | Back-end | React | Typescript | Laravel
        </p>

        <HeroBtnWrapper data-aos="zoom-in" data-aos-delay="900">
            <LinkToAbout
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
            >
              Check it Out ! {hover ? <ArrowForward /> : <ArrowRight />}
            </LinkToAbout>
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
        data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
      >
        <span></span><span></span>Scroll To See More
      </ScrollLink>
    </HeroContainer>
  )
}

export default HeroSection

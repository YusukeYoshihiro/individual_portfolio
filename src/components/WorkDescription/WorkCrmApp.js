import React from 'react'
import { Button } from '../../Features/ButtonScrollStyles';
import workImg from '../../assets/images/laravel_crm_app.png';
import { workEcommerseApp, ButtonRepository } from '../../Data/data';
import BackToPages from '../../Features/BackToPages';
import { URL } from '../../Data/showRepository';

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
  LanguageList,
} from './WorkDescElements';

const crmAppImg = workImg;

const WorkDesc3 = () => {

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
    alt,
    primary,
    dark,
    dark2,
  } = workEcommerseApp;

  const { buttonLabelRepo } = ButtonRepository;

  return (
    <>
      <InfoContainer lightBg={lightBg} id={id} >
        <InfoWrapper>
          <div >
            <TopLine>{topLine}</TopLine>
            <Heading lightText={lightText}>{headline}</Heading>
            <p style={{ color: 'var(--color-dark)' }}>{description}</p>
          </div>
          <InfoRow imgStart={imgStart}>
            <Column1 >
              <ImgWrap>
                <Img src={crmAppImg} alt={alt} />
              </ImgWrap>
            </Column1>

            <Column2 >
              <TextWrapper>
                <Subtitle darkText={darkText}>
                  <h3>&lt; Front-End /&gt;</h3><br />
                  <LanguageList>
                    <li> Vue.js</li>
                    <li> Inertia.js</li>
                    <li> Tailwindcss</li>
                  </LanguageList>

                  <h3>&lt; Backend ＆ Others /&gt;</h3><br />
                  <LanguageList>
                    <li> Laravel</li>
                    <li> MySQL</li>
                    <li> youbinbango-core</li>
                  </LanguageList>
                </Subtitle>
                <BtnWrap>
                  {/* <Button
                    to='home'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                    onClick={() => {
                      window.open(URL[1].website.crmApp, '_blank')
                    }}
                  >
                    {buttonLabel}
                  </Button> */}
                  <Button
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                    onClick={() => window.open(URL[0].repository.crmApp, '_blank')}
                  >
                    {buttonLabelRepo}
                  </Button>
                </BtnWrap>
                <BackToPages />
              </TextWrapper>
            </Column2>

          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default WorkDesc3;
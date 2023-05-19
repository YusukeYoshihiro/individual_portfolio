import React from 'react'
import { Button } from '../../Features/ButtonScrollStyles';
import workImg from '../../assets/images/notion_blog_app.png';
import { notionBlogApp, ButtonRepository } from '../../Data/data';
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

const notionBlogAppImg = workImg;

const NotionBlogApp = () => {

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
  } = notionBlogApp;

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
                <Img src={notionBlogAppImg} alt={alt} />
              </ImgWrap>
            </Column1>

            <Column2 >
              <TextWrapper>
                <Subtitle darkText={darkText}>
                  <h3>&lt; Tech Stack /&gt;</h3><br />
                  <LanguageList>
                    <li> Next.js</li>
                    <li> Typescript</li>
                    <li> TailwindCSS</li>
                  </LanguageList>

                  <h3>&lt; API ＆ Dev Environment /&gt;</h3><br />
                  <LanguageList>
                    <li> Notion API</li>
                    <li> Git/CLI</li>
                    <li> GitHub</li>
                    <li> Vercel</li>
                  </LanguageList>
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
                    onClick={() => {
                      window.open(URL[1].website.notionBlogApp, '_blank')
                    }}
                  >
                    {buttonLabel}
                  </Button>
                  <Button
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                    onClick={() => window.open(URL[0].repository.notionBlogApp, '_blank')}
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

export default NotionBlogApp;
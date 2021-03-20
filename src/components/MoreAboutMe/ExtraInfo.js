import React from 'react'
// import { Button } from '../ButtonScrollStyles';
import workImg from '../../assets/images/MockImgCricket.png';
import { extraInfo } from '../../Data/data';

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
} from  './ExtrainfoElement';


// const backToWorks = () => {
//    window.history.back();
// }

const cricketImg = workImg;

const ExtraInfo = () => {
  // const [hover, setHover] = useState(false);

  // const onHover = () => {
  //   setHover(!hover)
  // }

  const {
    lightBg,
    id,
    imgStart,
    topLine,
    lightText,
    headline,
    darkText,
    description,
    alt,
    // primary,
    // dark,
    // dark2,
    } = extraInfo;

  return (
    <>
       <InfoContainer lightBg={lightBg} id={id} >
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1 >
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>
                  {description}
                </Subtitle>
              </TextWrapper>
            </Column1>

            <Column2 >
              <ImgWrap>
                <Img src={cricketImg} alt={alt} />
              </ImgWrap>
              <br/><br/>
            </Column2>

          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default ExtraInfo;
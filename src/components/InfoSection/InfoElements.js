import styled from 'styled-components';

// #222629
// #222629
export const InfoContainer = styled.div`
   color : #fff;
   background-color: ${({lightBg}) => (lightBg ? '#fff' : '#222629')};

   @media screen and (max-width: 768px) {
     padding: 100px 0;
   }
`;

export const InfoWrapper = styled.div`
   display: grid;
   z-index: 1;
   height: 860px;
   width: 100%;
   max-width: 1100px;
   margin-right: auto;
   margin-left: auto;
   padding: 0 24px;
   justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'`:`'col1 col2' `)};

  @media screen and (max-width: 768px) {
     grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'`: `'col1 col1' 'col2 col2'`)};
  }
`;

export const Column1 = styled.div`
 background: ${({objStyle}) => (objStyle)};
 margin-bottom: 15px;
 padding: 0 15px;
 grid-area: col1;

`;

export const Column2 = styled.div`
 margin-bottom: 15px;
 padding: 0 15px;
 grid-area: col2;
`;

export const ColumnSkill = styled.div`
 background: ${({objStyle}) => (objStyle)};
 margin-bottom: 15px;
 grid-area: col1;
`;

export const ColumnSkill2 = styled.div`
 margin-bottom: 15px;
 padding: 0 15px;
 grid-area: col2;
`;

export const ColumnContact = styled.div`
 background: ${({objStyle}) => (objStyle)};
 margin-bottom: 15px;
 padding: 0 15px;
 grid-area: col1;
`;

export const ColumnContact2 = styled.div`
 margin-bottom: 15px;
 padding: 0 15px;
 grid-area: col2;
`;


export const TextWrapper = styled.div`
 max-width: 540px;
 padding-top: 0;
 padding-bottom: 60px;
 padding: 0px 30px;
`;

export const TopLine = styled.p`
  color: #86c232;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
   margin-bottom: 24px;
   font-size: 48px;
   line-height: 1.1;
   font-weight: 600;
   color: ${({lightText})=> (lightText ? '#f7f8fa' : '#222629')};

   @media screen and (max-width: 480px) {
     font-size: 32px;
   }
`;

export const Subtitle = styled.div`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({darkText})=> (darkText ? '#222629': '#fff')};
`;

export const Subtitle3 = styled.div`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({darkText})=> (darkText ? '#fff': '#222629')};
`;

// For infoSec_2.js
export const SkillsWrap = styled.div`
  color: ${({darkText})=> (darkText ? '#222629': '#fff')};

  @media screen and (max-width: 378px){
    h3{
      font-size: 1rem;
    }
    p{
      font-size: 0.8rem;
      white-space: nowrap;
    }
  }
`;

export const BtnWrap = styled.div`
   display: flex;
   justify-content: flex-start;
`;

export const ImgWrap = styled.div`
   max-width: 555px;
   height: 100%;

   @media screen and (max-width: 768px) {
    width: 350px;
    height: 350px;
   }
`;

export const ContactImgWrap = styled.div`
   max-width: 555px;
   height: 100%;

   @media screen and (max-width: 376px) {
    /* width: 380px; */
   }
`;

export const ImgWrapSkill = styled.div`
   max-width: 555px;
   height: 100%;

   @media screen and (max-width: 376px) {
    width: 300px;
    height: 350px;
   }
`;


export const Img = styled.img`
  display: block;
  margin: auto;
  width: 80%;
  padding-right: 0;
`;




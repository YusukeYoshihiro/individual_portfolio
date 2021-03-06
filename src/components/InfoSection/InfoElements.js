import styled from 'styled-components';

// var(--color-dark)
export const InfoContainer = styled.div`
   color : #fff;
   background-color: ${({ lightBg }) => (lightBg ? '#fff' : 'var(--color-dark)')};

   @media screen and (max-width: 768px) {
     padding: 60px 0;
   }
`;

export const InfoWrapper = styled.div`
   display: grid;
   z-index: 1;
   height: 860px;
   width: 100%;
   margin-right: auto;
   margin-left: auto;
   padding: 0 24px;
   justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2' `)};

  @media screen and (max-width: 768px) {
     grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
  }
`;

export const Column1 = styled.div`
 background: ${({ objStyle }) => (objStyle)};
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
 background: ${({ objStyle }) => (objStyle)};
 margin-bottom: 15px;
 grid-area: col1;
`;

export const ColumnSkill2 = styled.div`
 margin-bottom: 15px;
 padding: 0 15px;
 grid-area: col2;
`;

export const ColumnContact = styled.div`
 background: ${({ objStyle }) => (objStyle)};
 padding: 15px;
 height: 70vh;
 display: flex;
 justify-content: center;
 align-items: center;
`;

export const TextWrapper = styled.div`
 padding-top: 0;
 padding-bottom: 60px;
 padding: 0px 30px;
`;

export const TopLine = styled.p`
  color:var(--color-green);
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
   color: ${({ lightText }) => (lightText ? '#f7f8fa' : 'var(--color-dark)')};

   @media screen and (max-width: 480px) {
     font-size: 32px;
   }
`;

export const Subtitle = styled.div`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? 'var(--color-dark)' : '#fff')};
  h2{
    display: inline;
    font-size: 18px;
    font-weight:lighter;
  }
  p{
    display: inline;
  }

  @media screen and (max-width:375px){
    h2{
      font-size: 13px;
    }
    p{
      font-size: 13px;
  }
  }
`;

// for contact part
export const Subtitle3 = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  color: ${({ darkText }) => (darkText ? 'var(--color-green)' : 'var(--color-dark)')};
  font-size: 2rem;
  text-decoration: none;
  display: inline-block;
  position: relative;
  overflow: hidden;
  :hover{
    color: #36af9a;
    /* color: #4a196d; */
    /* color: var(--color-green); */
  }

  ::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color:var(--color-green);
    transform: translate(-100%, 0);
    transition: transform cubic-bezier(0.215, 0.61, 0.355, 1) 0.4s;
    }
  
    :hover::after {
    transform: translate(0, 0);
  }
  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

// For infoSec_2.js
export const InfoSkillCtn = styled.div`
  max-width:1100px;
  min-height:80vh;
  margin: auto;
  padding: 0 20px;
  display: flex;
  align-items: center;

`;

export const SkillTitleCtn = styled.div`
  text-align:center;
`;

export const SkillsWrap = styled.div`
  color: ${({ darkText }) => (darkText ? 'var(--color-dark)' : '#fff')};
  margin: 50px auto 0;
  padding: 0 20px;

  @media screen and (min-width:1024px){
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
  }

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
`;

export const ImgWrapSkill = styled.div`
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


export const SkillsList = styled.ul`
  display:flex;
  list-style: none;
  margin-bottom:2rem;
  flex-wrap: wrap;
  li{
    font-size:1rem;
    padding:5px;
    border:1px solid var(--color-dark);
    border-radius: 8px;
    margin-right: 10px;
    margin-bottom: 10px;
    :hover{
      /* transform:scale(1.05); */
      border:1px solid var(--color-green);
      background-color: var(--color-green);
      color: #fff;
    }
   

    @media (max-width:768px){
      font-size:0.7rem;
    }
  }
 
`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  width: 240px;
  @media screen and (max-width:376px){
  justify-content: center;
  }
`;

export const SocialIconLink= styled.a`
 margin-right:15px;
 color:var(--color-green);
 font-size: 2.5rem;
 transition: all 0.2s ease-in-out;

 &:hover {
    transform: scale(1.5);
    transition: all 0.2s ease-in-out;
    color: #36af9a;
  }
`;
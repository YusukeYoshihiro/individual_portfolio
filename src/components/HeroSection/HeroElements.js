import styled from 'styled-components';

export const HeroContainer = styled.div`
   background: #fff;
   display: flex;
   flex-direction:column;
   align-items: center;
   padding: 30px;
   height: 800px;
   max-width: 1200px;
   margin:auto;

   @media screen and (min-width: 768px){
   justify-content: space-around;
   align-items: center;
   flex-direction: row;
  }
   
`;

export const HeroContent = styled.div`
  margin-top:80px;
  padding: 8px 24px;
  display: flex;
  align-items:center;
  flex-direction: column;
  @media screen and (min-width: 768px){
    margin-top:0;
    align-items:start;
  }
`;

export const HeroH1 = styled.h2`
  color:var(--color-dark);
  font-size: 22px;
  text-align: center;
  strong{
    color:var(--color-green);
    text-shadow: 0px 3px 0px #b2a98f,
                 0px 14px 10px rgba(0,0,0,0.15),
                 0px 24px 2px rgba(0,0,0,0.1),
                 0px 34px 30px rgba(0,0,0,0.1);
  }
  @media screen and (min-width: 768px){
    font-size: 30px;
    text-align: start;
  }
  @media screen and (min-width: 1024px){
    font-size: 45px;
  
  }
`;

export const HeroP= styled.p`
  margin-top: 24px;
  display: flex;
  color:var(--color-dark);
  font-size: 24px;
  max-width: 600px;

  @media screen and (max-width: 768px){
    font-size: 24px;
  }

  @media screen and (max-width: 480px){
    font-size: 18px;
  }
`;

export const HeroBtnWrapper= styled.div`
   margin-top: 32px;
`;

export const HeroImgCtn= styled.div`
  width:75%;
  margin-top:20%;
  @media screen and (min-width: 768px){
    margin-top:0;
    width:35%;
  }
`;


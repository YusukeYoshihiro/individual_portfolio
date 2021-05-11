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
  p{
    text-align: center;
    margin-top:15px;
    color:#36af9a;
  }
  @media screen and (min-width: 768px){
    text-align: start;
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
  }
  @media screen and (min-width: 768px){
    font-size: 30px;
    text-align: start;
  }
  @media screen and (min-width: 1024px){
    font-size: 45px;
  
  }
`;

export const ItypedCtn = styled.div`
  @media screen and (min-width: 768px){
    display: flex;
  }
`;

export const HeroP = styled.div`
  margin-top: 24px;
  color:var(--color-dark);
  font-size: 18px;
  max-width: 600px;
  
  @media screen and (min-width: 768px){
    font-size: 24px;
  }
`;

export const HeroBtnWrapper = styled.div`
   margin-top: 32px;
`;

export const HeroImgCtn = styled.div`
  width:75%;
  margin-top:20%;
  @media screen and (min-width: 768px){
    margin-top:0;
    width:35%;
  }
`;

export const HeroAnimateCtn = styled.div`
 overflow: hidden;
 height: 30px;
 @media screen and (min-width: 768px){
  height: 40px;
 } 
 @media screen and (min-width: 1024px){
    height: 60px;
 }
`
export const HeroUl = styled.ul`
    overflow: hidden;
    line-height:1.2;
    height: 30px;
    @media screen and (min-width: 768px){
    height: 40px;
    } 
    @media screen and (min-width: 1024px){
    height: 60px;
    } 
    /* margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px; */
  li{
    animation-name: up_down_title;
    animation-duration: 15s;
    animation-iteration-count: infinite;
    animation-delay: 2s;
    padding: 3px 0;
    /* webkit-animation-name: up_down_title;
    webkit-animation-duration: 10s;
    webkit-animation-iteration-count: infinite;
    webkit-animation-delay: 2s; */
    @keyframes up_down_title{
      0%, 8.5%, 100% {
        transform: translate3d(0,0,0);
      }
      11.66%, 18.32% {
        transform: translate3d(0,-100%,0);
      }
      21.32%, 28.98% {
        transform: translate3d(0,-200%,0);
      }
      31.98%, 38.64% {
        transform: translate3d(0,-300%,0);
     }
      41.64%, 48.3% {
        transform: translate3d(0,-400%,0);
     }
      51.3%, 58.96% {
        transform: translate3d(0,-500%,0);
     }
      61.3%, 68.96% {
        transform: translate3d(0,-400%,0);
     }
      71.3%, 78.96% {
        transform: translate3d(0,-300%,0);
     }
      81.3%, 88.96% {
        transform: translate3d(0,-200%,0);
     }
      91.3%, 97.96% {
        transform: translate3d(0,-100%,0);
     }
    }
    h2{
      font-size: 22px;
      animation: fadeUpAnimation ease 2s;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      animation-iteration-count: 1;
      animation-fill-mode: both;
      @keyframes fadeUpAnimation{
        0% {
          transform: translateY(100%);
          opacity: 0;
        }
        100% {
          transform: translateY(0);
          opacity: 1;
        }
      }
      @media screen and (min-width: 768px){
        font-size: 30px;
      }
      @media screen and (min-width: 1024px){
        font-size: 45px;
    } 
      /* webkit-animation: fadeUpAnimation ease 2s;
      webkit-animation-iteration-count: 1;
      webkit-animation-fill-mode: both; */
    }
  }
`;

import styled from 'styled-components';
import ProdBgImg from '../../assets/images/productBgImg.jpg';
var Scroll = require('react-scroll');
var Element = Scroll.Element;

export const WorksContainer = styled(Element)`
   height: 1100px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background: var(--color-dark);

   @media screen and (max-width: 768px){
    padding: 100px 0;
     height: 100%;
   }

   @media screen and (max-width: 480px){
     padding: 100px 0;
     height: 100%;
   }
`;

export const WorksWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  grid-gap: 32px;
  padding: 0 50px;

  @media screen and (max-width: 1000px){
    grid-template-columns: 1fr 1fr;
   }

   @media screen and (max-width: 768px){
     grid-template-columns: 1fr;
     padding: 0 20px;
   }
`;

export const WorksCard = styled.div`
   background: #fff;
   align-items: center;
   border-radius: 10px;
   min-height: 320px;
   transition: all 0.2s ease-in-out;
   opacity: 0; 
   position: relative;
	 overflow: hidden;

  @media screen and (max-width: 780px) {
    min-height: 280px;
  }
`;

export const WorksImgCtn = styled.div`
  /* background-color:var(--color-green); */
  background-image:url(${ProdBgImg});
  /* background-position: center; */
  /* background-repeat: no-repeat; */
  /* background-attachment: cover; */
  /* width:100%;
  height: 100%; */
`;

export const WorksIcon = styled.img`
   height: 160px;
   width: 160px;
   margin-bottom: 10px;
   display: block;
   margin: auto;
`;

export const WorksH1 = styled.h1`
   font-size: 2.5rem;
   color: #fff;
   margin-bottom: 64px;

   @media screen and (max-width: 480px){
     font-size: 2rem;
   }
`;

export const WorksH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const WorksP = styled.p`
  font-size: 1rem;
  text-align: center;
`;



export const WorksContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  padding: 5px;
`;

















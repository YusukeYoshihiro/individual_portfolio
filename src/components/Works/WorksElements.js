import styled from 'styled-components';
import ProdBgImg from '../../assets/images/productBgImg.png';
var Scroll = require('react-scroll');
var Element = Scroll.Element;

export const WorksContainer = styled(Element)`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   position: relative;

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
  max-width: 1200px;
  margin: 60px auto;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  grid-gap: 30px;

  @media screen and (min-width: 768px){
    padding: 0 50px;
    grid-template-columns: 1fr 1fr;
   }

   @media screen and (min-width: 1440px){
     grid-template-columns: repeat(3, 1fr);
     padding: 0 20px;
   }
`;

export const WorksContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.2s all ease-in;
  background-color: var(--color-dark);
  border-radius: 10px;
  
`;

export const WorksImgCtn = styled.div`
  box-shadow: -1px 5px 16px 4px rgb(0 0 0 / 8%);
  border-radius: 10px;
  background:url(${ProdBgImg}) no-repeat;
  transition: 0.2s all ease-in;
  :hover{
    cursor: pointer;
    opacity: 0.5;
   }
`;

export const WorksCard = styled.div`
   align-items: center;
   border-radius: 10px;
   max-width: 350px;
   max-height: 300px;
   opacity: 1; 
   /* position: relative; */
   
   :hover ${WorksContent}{
    transform: translateY(20px);
    opacity: 0.85;
   }
   :hover ${WorksImgCtn}{
    transform: translateY(20px);
    opacity: 0.85;
   }


	 /* overflow: hidden; */

  @media screen and (max-width: 780px) {
    min-height: 280px;
  }
`;

export const WorksIcon = styled.img`
   margin: auto;
   max-width: 350px;
   max-height: 300px;
   /* margin-bottom: 10px; */
   /* margin: 70%; */
`;

export const WorksH1 = styled.h1`
   font-size: 2.5rem;
   color: var(--color-green);
   margin-top: 64px;
   @media screen and (max-width: 480px){
     font-size: 2rem;
   }
`;

export const TextCtn = styled.div`
  margin:auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;



export const WorksH2 = styled.h2`
  color: var(--color-white);
  font-size: 1.6rem;
  margin: 0 auto 10px; 
`; 

export const WorksP = styled.p`
  color: var(--color-white);
  font-size: 1rem;
  text-align: center;
`;




















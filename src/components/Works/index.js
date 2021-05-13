import React from 'react';
import Icon1 from '../../assets/images/Cricket_Logo.png';
import Icon2 from '../../assets/images/Lacrosse_works.png';
import Icon3 from '../../assets/images/movieApp.png';
import Icon4 from '../../assets/images/workDescFour.png';
import Icon5 from '../../assets/images/covidDash_logo.png';
import Icon6 from '../../assets/images/portfolioImg.png';
import Icon7 from '../../assets/images/videoApp_mockUp.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  WorksContainer,
  WorksH1,
  WorksWrapper,
  WorksCard,
  WorksIcon,
  WorksContent,
  WorksH2,
  WorksP,
  WorksImgCtn,
  TextCtn
} from './WorksElements'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkMore = styled(Link)`
  border: 2px solid  var(--color-green);
  border-radius: 50px;
  margin-bottom: 15px;
  background: ${({ primary }) => ( primary ?'var(--color-green)' : 'var(--color-dark)' )};
  white-space: nowrap;
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  color: ${({dark}) => (dark ? '#fff' : '#fff' )}; 
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  margin-top: 15px;
  width: 200px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => ( primary ? '#fff' :'var(--color-green)' )};
    color: ${({dark}) => (dark ? 'var(--color-dark)' : '#fff' )}; 
  }
`

AOS.init();


const Works = () => {
  return (
    <WorksContainer name="works" basename="works">
      <WorksH1>Portfolio</WorksH1>
      <WorksWrapper>
          <WorksCard data-aos="zoom-in" data-aos-duration="1000">
            <WorksImgCtn >
              <WorksIcon src={Icon1} />
            </WorksImgCtn>
            <WorksContent>
              <TextCtn >
                <WorksH2>Cricket Project</WorksH2>
                <WorksP>Built an actual website <br />
                for local cricket organization.
                  </WorksP>
                <LinkMore
                  to={'/cricket'}
                  duration={500}
                  exact="true"
                  offset={0}
                  primary='true'
                  dark='true'
                > Learn More
                </LinkMore>
              </TextCtn>s
            </WorksContent>
          </WorksCard>
       
          <WorksCard data-aos="zoom-in" data-aos-duration="1000">
            <WorksImgCtn>
              <WorksIcon src={Icon2} />
            </WorksImgCtn>
            <WorksContent>
              <TextCtn>
                <WorksH2>Lacrosse Project</WorksH2>
                <WorksP>Built an official website <br />
                for Pro Lacrosse Caliber
                </WorksP>
                <LinkMore
                  to={'/lacrosse'}
                  duration={500}
                  exact="true"
                  offset={0}
                  primary='true'
                  dark='true'
                > Learn More
                </LinkMore>
              </TextCtn>
            </WorksContent>
          </WorksCard>
      
          <WorksCard data-aos="zoom-in" data-aos-duration="1000"  >
            <WorksImgCtn>
              <WorksIcon src={Icon7} />
            </WorksImgCtn>
            <WorksContent>
              <TextCtn>
                <WorksH2>React YouTube App</WorksH2>
                <WorksP>Built a video app <br />
                with React Hooks
                </WorksP>
                <LinkMore
                  to={'/videoApp'}
                  duration={500}
                  exact="true"
                  offset={0}
                  primary='true'
                  dark='true'
                > Learn More
                </LinkMore>
              </TextCtn>
            </WorksContent>
          </WorksCard>

          <WorksCard data-aos="zoom-in" data-aos-duration="1000" >
            <WorksImgCtn>
              <WorksIcon src={Icon3} />
            </WorksImgCtn>
            <WorksContent>
              <TextCtn>
                <WorksH2>React Movie App</WorksH2>
                <WorksP>Built a movie app <br />
                with React and Firebase</WorksP>
                <LinkMore
                  to={'/movieApp'}
                  duration={500}
                  exact="true"
                  offset={0}
                  primary='true'
                  dark='true'
                > Learn More
                </LinkMore>
              </TextCtn>
            </WorksContent>
          </WorksCard>

          <WorksCard data-aos="zoom-in" data-aos-duration="1000" >
            <WorksImgCtn>
              <WorksIcon src={Icon5} />
            </WorksImgCtn>
            <WorksContent>
             <TextCtn>
                <WorksH2>COVID-19 <br />Dashboard</WorksH2>
                <WorksP>Built COVID-19 Dashboard<br />
                  with Typescript, React.js and Chart.js</WorksP>
                  <LinkMore
                  to={'/covid'}
                  duration={500}
                  exact="true"
                  offset={0}
                  primary='true'
                  dark='true'
                > Learn More
                </LinkMore>
             </TextCtn>
            </WorksContent>
          </WorksCard>

          <WorksCard data-aos="zoom-in" data-aos-duration="1000"  >
            <WorksImgCtn>
              <WorksIcon src={Icon6} />
            </WorksImgCtn>
            <WorksContent>
             <TextCtn>
                <WorksH2>Portfolio</WorksH2>
                <WorksP>Built my portfolio with <br />
                React, Styled-Components</WorksP>
                <LinkMore
                  to={'/portfolio'}
                  duration={500}
                  exact="true"
                  offset={0}
                  primary='true'
                  dark='true'
                > Learn More
                </LinkMore>
             </TextCtn>
            </WorksContent>
          </WorksCard>
        
          <WorksCard data-aos="zoom-in" data-aos-duration="1000"  >
            <WorksImgCtn>
              <WorksIcon src={Icon4} />
            </WorksImgCtn>
            <WorksContent>
              <TextCtn>
                <WorksH2>E-commerce App</WorksH2>
                <WorksP>Coming Soon ! <br /><br /></WorksP>
                  {/* <LinkMore
                  to={'/ecommerce'}
                  duration={500}
                  exact="true"
                  offset={0}
                  primary='true'
                  dark='true'
                > Learn More
                </LinkMore> */}
              </TextCtn>
            </WorksContent>
          </WorksCard>

      </WorksWrapper>
    </WorksContainer>
  )
}

export default Works;

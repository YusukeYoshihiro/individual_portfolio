import React from 'react';
import Icon1 from '../../assets/images/Cricket_Logo.png';
import Icon2 from '../../assets/images/Lacrosse_works.png';
import Icon3 from '../../assets/images/Y\'sFilm_logo.png';
import Icon4 from '../../assets/images/workDescFour.png';
import Icon5 from '../../assets/images/covidDash_logo.png';
import Icon6 from '../../assets/images/FABE_LOGO_3.png';
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
} from './WorksElements'
import { ButtonLink } from '../../Features/ButtonLinkStyles';
import { ButtonLinkData } from '../../Data/data';


AOS.init();

const Works = () => {
  const {
    primary,
    dark,
  } = ButtonLinkData;

  return (
    <WorksContainer name="works" basename="works">
      <WorksH1>My Projects</WorksH1>
      <WorksWrapper>
        <WorksCard data-aos="zoom-in" data-aos-duration="1000">
          <WorksImgCtn >
            <WorksIcon src={Icon1} />
          </WorksImgCtn>
          <WorksContent>
            <WorksH2>Cricket Project</WorksH2>
            <WorksP>Built an actual website <br/>
            for local cricket organization.s
              </WorksP>
            <ButtonLink
              to={'/cricket'}
              duration={500}
              exact="true"
              offset={-80}
              primary={primary ? 1 : 0}
              dark={dark ? 1 : 0}
            > Learn More
              </ButtonLink>
          </WorksContent>
        </WorksCard>


        <WorksCard data-aos="zoom-in" data-aos-duration="1000">
          <WorksImgCtn>
            <WorksIcon src={Icon2} />
          </WorksImgCtn>
          <WorksContent>
            <WorksH2>Lacrosse Project</WorksH2>
            <WorksP>Built an official website <br/>
            for Pro Lacrosse Caliber.
            </WorksP>
            <ButtonLink
              to={'/lacrosse'}
              duration={500}
              exact="true"
              offset={-80}
              primary={primary ? 1 : 0}
              dark={dark ? 1 : 0}
            > Learn More
            </ButtonLink>
          </WorksContent>
        </WorksCard>


        <WorksCard data-aos="zoom-in" data-aos-duration="1000" >
          <WorksImgCtn>
            <WorksIcon src={Icon3} />
          </WorksImgCtn>
          <WorksContent>
            <WorksH2>Movie App Project</WorksH2>
            <WorksP>Built a movie app <br/>
            with React and Firebase</WorksP>
            <ButtonLink
              to={'/movieApp'}
              duration={500}
              exact="true"
              offset={-80}
              primary={primary ? 1 : 0}
              dark={dark ? 1 : 0}
            > Learn More
              </ButtonLink>
          </WorksContent>
        </WorksCard>



        <WorksCard data-aos="zoom-in" data-aos-duration="1000" >
          <WorksImgCtn>
            <WorksIcon src={Icon5} />
          </WorksImgCtn>
          <WorksContent>
            <WorksH2>COVID-19 Dashboard</WorksH2>
            <WorksP>Built COVID-19 Dashboard<br/>
              with Typescript  React</WorksP>
            <ButtonLink
              to={'/covid'}
              duration={500}
              exact="true"
              offset={-80}
              primary={primary ? 1 : 0}
              dark={dark ? 1 : 0}
            > Learn More
              </ButtonLink>
          </WorksContent>
        </WorksCard>

        <WorksCard data-aos="zoom-in" data-aos-duration="1000"  >
          <WorksImgCtn>
            <WorksIcon src={Icon6} />
          </WorksImgCtn>
          <WorksContent>
            <WorksH2>Portfolio</WorksH2>
            <WorksP>Built my portfolio with <br/>
            React, Styled-Components</WorksP>
            <ButtonLink
              to={'/portfolio'}
              duration={500}
              exact="true"
              offset={-80}
              primary={primary ? 1 : 0}
              dark={dark ? 1 : 0}
            > Learn More
              </ButtonLink>
          </WorksContent>
        </WorksCard>



        <WorksCard data-aos="zoom-in" data-aos-duration="1000"  >
          <WorksImgCtn>
            <WorksIcon src={Icon4} />
          </WorksImgCtn>
          <WorksContent>
            <WorksH2>E-commerce App Project</WorksH2>
            <WorksP>Coming Soon ! <br /><br /></WorksP>
            <ButtonLink
              duration={500}
              exact="true"
              offset={-80}
              primary={primary ? 1 : 0}
              dark={dark ? 1 : 0}
            > Learn More
              </ButtonLink>
          </WorksContent>
        </WorksCard>

      </WorksWrapper>
    </WorksContainer>
  )
}

export default Works;

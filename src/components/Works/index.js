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
  WorksH2,
  WorksP,
  Link,
} from './WorksElements'
import { ButtonLink } from '../../Features/ButtonLinkStyles';
import { ButtonLinkData }  from '../../Data/data';


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
        <Link>
          <WorksCard data-aos="zoom-in" data-aos-duration="1000">
            <WorksIcon src={Icon1} />
            <WorksH2>Cricket Project</WorksH2>
            <WorksP>Built an actual website for local cricket organization.
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
          </WorksCard>
        </Link>

        <Link>
          <WorksCard data-aos="zoom-in" data-aos-duration="1000">
            <WorksIcon src={Icon2} />
            <WorksH2>Lacrosse Project</WorksH2>
            <WorksP>Built an actual website for Pro Lacrosse Caliber. 
            <br/>
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
          </WorksCard>
        </Link>

        <Link>
          <WorksCard data-aos="zoom-in" data-aos-duration="1000" >
            <WorksIcon src={Icon3} />
            <WorksH2>Movie App Project</WorksH2>
            <WorksP>Built movie app with React and Firebase</WorksP>
            <ButtonLink 
               to={'/movieApp'}
               duration={500}
               exact="true"
               offset={-80}
               primary={primary ? 1 : 0}
               dark={dark ? 1 : 0}
              > Learn More
            </ButtonLink> 
          </WorksCard>
        </Link>

        <Link>
          <WorksCard data-aos="zoom-in" data-aos-duration="1000" >
            <WorksIcon src={Icon5} />
            <WorksH2>COVID-19 Dashboard</WorksH2>
            <WorksP>Built COVID-19 Dashboard Typescript with React</WorksP>
            <ButtonLink 
               to={'/covid'}
               duration={500}
               exact="true"
               offset={-80}
               primary={primary ? 1 : 0}
               dark={dark ? 1 : 0}
              > Learn More
            </ButtonLink> 
          </WorksCard>
        </Link>

        <Link>
          <WorksCard data-aos="zoom-in" data-aos-duration="1000"  >
            <WorksIcon src={Icon6} />
            <WorksH2>Portfolio</WorksH2>
            <WorksP>Built portfolio with React, Styled-Components</WorksP>
            <ButtonLink 
               to={'/portfolio'}
               duration={500}
               exact="true"
               offset={-80}
               primary={primary ? 1 : 0}
               dark={dark ? 1 : 0}
              > Learn More
            </ButtonLink> 
          </WorksCard>
        </Link>

        <Link >
          <WorksCard data-aos="zoom-in" data-aos-duration="1000"  >
            <WorksIcon src={Icon4} />
            <WorksH2>E-commerce App Project</WorksH2>
            <WorksP>Coming Soon ! <br/><br/></WorksP>
            <ButtonLink 
              // to={'/ecommerce'}
               duration={500}
               exact="true"
               offset={-80}
               primary={primary ? 1 : 0}
               dark={dark ? 1 : 0}
              > Learn More
            </ButtonLink> 
          </WorksCard>
        </Link>

      </WorksWrapper>
    </WorksContainer>
  )
}

export default Works;

import React from 'react';
import Icon1 from '../../assets/images/Cricket_Logo.png';
import Icon2 from '../../assets/images/Lacrosse_works.png';
import Icon3 from '../../assets/images/Y\'sFilm_logo.png';
import Icon4 from '../../assets/images/workDescFour.png';
import Icon5 from '../../assets/images/covidDash_logo.png';
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

AOS.init();

const Works = () => {

  return (
    <WorksContainer name="works" basename="works">
      <WorksH1>My Projects</WorksH1>
      <WorksWrapper>
        <Link to={'/cricket'}>
          <WorksCard data-aos="zoom-in" data-aos-duration="1000">
            <WorksIcon src={Icon1} />
            <WorksH2>Cricket Project</WorksH2>
            <WorksP>Built actual website for local cricket organization.
            </WorksP>
          </WorksCard>
        </Link>

        <Link to={'/lacrosse'}>
          <WorksCard data-aos="zoom-in" data-aos-duration="1000">
            <WorksIcon src={Icon2} />
            <WorksH2>Lacrosse Project</WorksH2>
            <WorksP>Built actual website for Pro Lacrosse Caliber for real client. 
            <br/>
            </WorksP>
          </WorksCard>
        </Link>

        <Link to={'/movieApp'}>
          <WorksCard data-aos="zoom-in" data-aos-duration="1000" >
            <WorksIcon src={Icon3} />
            <WorksH2>Movie App Project</WorksH2>
            <WorksP>Built movie app as own project with React.js, Firebase</WorksP>
          </WorksCard>
        </Link>

        <Link to={'/covid'}>
          <WorksCard data-aos="zoom-in" data-aos-duration="1000" >
            <WorksIcon src={Icon5} />
            <WorksH2>COVID-19 Dashboard</WorksH2>
            <WorksP>Built COVID-19 Live Dashboard Typescript with React</WorksP>
          </WorksCard>
        </Link>

        <Link to={'/ecommerce'}>
          <WorksCard data-aos="zoom-in" data-aos-duration="1000"  >
            <WorksIcon src={Icon4} />
            <WorksH2>E-commerce App Project</WorksH2>
            <WorksP>Coming Soon !</WorksP>
          </WorksCard>
        </Link>

      </WorksWrapper>
    </WorksContainer>
  )
}

export default Works;

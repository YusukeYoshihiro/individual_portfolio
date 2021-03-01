import React,{ useState } from 'react';
import { Button } from '../components/ButtonScrollStyles'
import {ButtonData} from '../Data/data';

import {
  ArrowBack,
  ArrowLeft,
} from '../components/ArrowIcon/ArrowIconStyles';

const BackToPages = () => {
  const backToWorks = () => {
    window.history.back();
  }

  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover)
  }

  const {   
    primary,
    dark,
  } = ButtonData;

  return (
    <div>
      <Button
        smooth={true}
        duration={500}
        spy={true}
        exact="true"
        offset={-80}
        primary={primary ? 1 : 0}
        dark={dark ? 1 : 0}
        onClick={backToWorks}
        onMouseEnter={onHover}
        onMouseLeave={onHover}
      >
        {hover ? <ArrowBack /> : <ArrowLeft />} &nbsp; Go Back
      </Button>
    </div>
  )
}

export default BackToPages;

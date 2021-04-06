import React from 'react';
import ITyped from 'react-ityped';
import styled from 'styled-components';

const Ityped = () => {
  const strings = ['Front-End Developer', 'Hockey Lover', 'Love to Cook']

  return (
    <ItypedCtn>
        <ITyped className='container ityped-cursor'
        showCursor={false}
        strings={strings}
        typeSpeed={80}
        backSpeed={50}
        startDelay={100}
        backDelay={250}
    />
    </ItypedCtn>
  )
}

export default Ityped;

const ItypedCtn = styled.div`
  min-height: 30px;
`



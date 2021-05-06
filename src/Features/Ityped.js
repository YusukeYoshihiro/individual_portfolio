import React from 'react';
import ITyped from 'react-ityped';
import styled from 'styled-components';

const Ityped = () => {
  const strings = ['Front-End Coding', 'Hockey', 'Cooking', 'Watching Films', 'Traveling']

  return (
    <ItypedCtn>
        <ITyped className='container ityped-cursor'
        showCursor={false}
        strings={strings}
        typeSpeed={100}
        backSpeed={80}
        startDelay={120}
        backDelay={450}
    />
    </ItypedCtn>
  )
}

export default Ityped;

const ItypedCtn = styled.div`
  min-height: 30px;
`



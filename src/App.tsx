import React from 'react';
import styled from 'styled-components'
import Authenticate from './components/Authenticate';

import GetLatestBlock from './components/GetLatestBlock'

const Wrapper = styled.div`
  font-size: 13px;
  font-family: Arial, Helvetica, sans-serif;
`;

function App() {
  return (
    <Wrapper>
      <GetLatestBlock />
      <Authenticate />
    </Wrapper>
  );
}

export default App
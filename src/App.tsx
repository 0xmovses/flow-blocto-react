import React from 'react';
import styled from 'styled-components'
import Authenticate from './components/Authenticate';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import GetLatestBlock from './components/GetLatestBlock'

const Wrapper = styled.div`
  font-size: 13px;
  font-family: Arial, Helvetica, sans-serif;
`;

function App() {
  return (
    <Provider store={store}>
      <Wrapper>
        <GetLatestBlock />
        <Authenticate />
      </Wrapper>
    </Provider>
  );
}

export default App
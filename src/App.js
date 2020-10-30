import React from 'react';
import Container from './components/Container';
import './App.css';
import './lpm.css';
import './hover.css';

function App(props) {
  return (
    <>
      <Container>
        {props.children}
      </Container>
    </>
  );
}

export default App;

import React from 'react';
// import Img from './Img';

function App(props) {
  return (
    <div className={props.align}>
      {props.children}
    </div>
  );
}

export default App;
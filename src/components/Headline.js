import React from 'react';

function App(props) {
  return (
    <div className="row" >
      <div className={props.align + " h1"}>
        {props.text}
      </div>
    </div>
  );
}

export default App;
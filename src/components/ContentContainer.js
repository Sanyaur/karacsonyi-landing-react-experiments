import React from 'react';
// import Headline from './Headline';
// import ImgBoxFour from './ImgBoxFour';
// import ImgBoxThree from './ImgBoxBottom';

function ContentContainer(props) {
  return (
    <div className={props.align} id={props.id} text={props.HeadlineText}>
      {props.children}
    </div>
  );
}

export default ContentContainer;
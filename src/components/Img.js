import React from 'react';

function Img(props) {
  return (
    <>

      <div className={props.align} >
        <a href="#"><img className="img-transform" src={props.img} alt={props.alt} /></a>
      </div>
      {/* <div className="d-block d-sm-none ">
        <img src={props.imgMobile} alt="Részletek" />
      </div> */}

    </>
  );
}

export default Img;
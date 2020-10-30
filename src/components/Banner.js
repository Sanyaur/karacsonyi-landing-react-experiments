import React from 'react';

function Banner(props) {
  return (
    <>
      <div style={{ width: 100 + '%' }} className="d-none d-sm-block mb-3 header">
        <img src={props.img} alt="Részletek" />
      </div>
      <div style={{ width: 100 + '%' }} className="d-block d-sm-none mb-3 header">
        <img src={props.imgMobile} alt="Részletek" />
      </div>
    </>
  );
}

export default Banner;
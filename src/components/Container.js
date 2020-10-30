import React from 'react';
import ContentBody from './ContentBody';
import Banner from './Banner';

function Container(props) {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <Banner
          img="https://avononline.avon.hu/mediaMarket-hu/5664/avon-ajandek-otletek-header_unq_166acfdb1e6a47aa88e3dc22405ed669.jpg"
          imgMobile="https://avononline.avon.hu/mediaMarket-hu/5665/avon-ajandek-otletek-header-mobile_unq_cfeb04e9cd5045bcb740a1dd07d6a614.jpg"
        />
      </div>
      <ContentBody>
        {props.children}
      </ContentBody>
    </div>
  );
}

export default Container;
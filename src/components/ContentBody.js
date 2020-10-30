import React from 'react';
import ContentContainer from './ContentContainer';
import Headline from './Headline';
import ImgBox from './ImgBox';
import Img from './Img';

function ContentBody() {
  let padding = " mp-5"
  let marginTop = " mt-5"
  let marginBottom = " mb-5"
  let animations = " animations"
  let alignHeadline = "col text-center" + marginBottom + marginTop
  let alignImgBox = "row flex-wrap d-flex justify-content-around fade-in" + marginBottom
  let alignImg = "col-md-3 col-6 text-center img-transform-container" + animations + marginBottom
  let alignImgBoxSecondRow = "row d-sm-flex justify-content-around" + marginBottom
  let alignImgSecondRow = "col-md-6 col-11 text-center img-transform-container" + animations + marginBottom
  let alignContentContainer = padding;

  return (
    <>
      <ContentContainer
        align={alignContentContainer}
        id="tuti-tippek"
      >
        <Headline
          align={alignHeadline}
          text="NINCS ÖTLETED? sEMMI GOND, NEKÜNK VAN PÁR TUTI TIPPÜNK, MIT VEGYÉL..."
        />
        <ImgBox
          align={alignImgBox}
        >
          <Img
            align={alignImg}
            img="https://avononline.avon.hu/mediaMarket-hu/5632/photo-11_unq_4cfa8699c2e74da89580437a495862ba.png"
            alt="nőknek"
          />
          <Img
            align={alignImg}
            img="https://avononline.avon.hu/mediaMarket-hu/5633/photo-12_unq_b90a66b7c19f4622a54e7d9898727310.png"
            alt="férfiaknak"
          />
          <Img
            align={alignImg}
            img="https://avononline.avon.hu/mediaMarket-hu/5634/photo-13_unq_a62526868b6d4f46bc6840bc27bbd15a.png"
            alt="fiataloknak"
          />
          <Img
            align={alignImg}
            img="https://avononline.avon.hu/mediaMarket-hu/5635/photo-14_unq_304b3538212f4c5daa377cdcc77bf64e.png"
            alt="gyerekeknek"
          />
        </ImgBox>
      </ContentContainer>

      <ContentContainer
        align={alignContentContainer}
        id="diszdobozok"
      >
        <Headline
          align={alignHeadline}
          text="NEM LESZ IDŐD BECSOMAGOLNI?
          SEMMI GOND, VÁLOGASS MESESZÉP, DÍSZDOBOZOS SZETTEKBŐL!"
        />
        <ImgBox
          align={alignImgBoxSecondRow}
        >
          <Img
            align={alignImgSecondRow}
            img="https://avononline.avon.hu/mediaMarket-hu/5636/photo-21_unq_761dfae160654704ac3685e16c5782dd.png"
            alt="nőknek"
          />
          <Img
            align={alignImgSecondRow}
            img="https://avononline.avon.hu/mediaMarket-hu/5637/photo-22_unq_67769c28ce0b4ba099d11ed210b2cd90.png"
            alt="férfiaknak"
          />
        </ImgBox>
      </ContentContainer>

      <ContentContainer
        align={alignContentContainer}
        id="price-range"
      >
        <Headline
          text="nEM SZERETNÉL TÚLKÖLTÖKEZNI? 
          kERESS AJÁNDÉKOT..."
          align={alignHeadline}
        />
        <ImgBox
          align={alignImgBox}
        >
          <Img
            align={alignImg}
            img="https://avononline.avon.hu/mediaMarket-hu/5638/photo-31_unq_3eb3318b82b140dd8ec6599d676d9d22.png"
            alt="2000 Ft alatt"
          />
          <Img
            align={alignImg}
            img="https://avononline.avon.hu/mediaMarket-hu/5639/photo-32_unq_7cef43795340444da163203aed6c1a3d.png"
            alt="2000Ft és 5000Ft között"
          />
          <Img
            align={alignImg}
            img="https://avononline.avon.hu/mediaMarket-hu/5640/photo-33_unq_b8b36e3504554b04bf17d2521ff7e288.png"
            alt="5000Ft és 7000Ft között"
          />
          <Img
            align={alignImg}
            img="https://avononline.avon.hu/mediaMarket-hu/5641/photo-34_unq_01c2864f014249feac4d82b24a28cd5a.png"
            alt="7000Ft felett"
          />
        </ImgBox>
      </ContentContainer>

      <ContentContainer
        align={alignContentContainer}
        id="kinalat"
      >
        <Headline
          text="TUDOD, HOGY IMÁD SMINKELNI? 
          ESETLEG RAJONG A PARFÜMÖKÉRT?
           NÉZD MEG A KÍNÁLATOT..."
          align={alignHeadline}
        />
        <ImgBox
          align={alignImgBox}
        >
          <Img
            align={alignImg}
            img="https://avononline.avon.hu/mediaMarket-hu/5642/photo-41_unq_826bae1e70d4418db22256de76ba0b04.png"
            alt="smink"
          />
          <Img
            align={alignImg}
            img="https://avononline.avon.hu/mediaMarket-hu/5643/photo-42_unq_fe5dcb855ebe46c7993a491c76b14ab4.png"
            alt="illat"
          />
          <Img
            align={alignImg}
            img="https://avononline.avon.hu/mediaMarket-hu/5644/photo-43_unq_0169f6a0dd7a454b9105a78a42dc32cb.png"
            alt="arcápolás"
          />
        </ImgBox>
        <ImgBox
          align={alignImgBox}
        >
          <Img
            align={alignImg}
            img="https://avononline.avon.hu/mediaMarket-hu/5645/photo-44_unq_57b815428612493fbd55086c0b30948a.png"
            alt="testápolás"
          />
          <Img
            align={alignImg}
            img="https://avononline.avon.hu/mediaMarket-hu/5646/photo-45_unq_c531d078e7a3462185dc152355c874a5.png"
            alt="divat és otthon"
          />
          <Img
            align={alignImg}
            img="https://avononline.avon.hu/mediaMarket-hu/5647/photo-46_unq_4c2fe42d5255426eaab9f7640ccede72.png"
            alt="karácsonyi dekoráció"
          />
        </ImgBox>
      </ContentContainer>

    </>
  );
}

export default ContentBody;
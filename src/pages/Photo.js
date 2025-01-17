import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";
import saveAs from "file-saver";
import * as C from "../styles/CommonStyle";
import * as P from "../styles/PhotoStyle";

import PcTitle from "../components/PcTitle";
import Header from "../components/Header";
import Footer from "../components/Footer";

import PhotoBg from "../img/photo_bg_360x579.png";
import PhotoFS from "../img/photo_360x579.png";
import PhotoDown from "../img/photo_download_24x24.png";
import PhotoBox from "../components/PhotoBox";

function Photo() {
  const [imagePreviews, setImagePreviews] = useState([null, null]);

  const setImagePreview = (index, preview) => {
    const updatedPreviews = [...imagePreviews];
    updatedPreviews[index] = preview;
    setImagePreviews(updatedPreviews);
  };

  const ref = useRef();

  const onCaptureClick = async () => {
    if (ref.current === null) {
      return;
    }

    const captureImg = async () => {
      if (ref.current) {
        const canvas = await html2canvas(ref.current, { scale: 4 });
        canvas.toBlob((blob) => {
          if (blob !== null) {
            saveAs(blob, "2024 근화제 찬란.png");
          }
        });
      }
    };

    captureImg();
  };

  return (
    <>
      <C.Page>
        <C.BlackBg />
        <C.Area>
          <C.Title>
            <PcTitle />
          </C.Title>
          <P.Background>
            <C.Phone>
              <P.Photo>
                <Header />
                <C.PageTitle>PHOTO</C.PageTitle>
                <P.PhotoSpace>
                  <P.TextSpace>
                    <P.Text>
                      <p>이미지는 약 5:6 비율을 권장합니다.</p>
                      <p>카카오톡으로 접속 시 다운로드가 어렵습니다.</p>
                    </P.Text>
                    <P.PhotoDownImg src={PhotoDown} alt="다운로드" onClick={onCaptureClick} />
                  </P.TextSpace>
                </P.PhotoSpace>
                <P.FrameCenter>
                  <P.CaptureFrame ref={ref}>
                    <P.FrameBox>
                      <P.Frame src={PhotoBg} alt="프레임" />
                    </P.FrameBox>
                    <P.PhotoFrame>
                      <P.PhotoPosBox>
                        <P.PhotoPos>
                          <P.PhotoPosOne>
                            <PhotoBox index={0} setImagePreview={setImagePreview} imagePreview={imagePreviews[0]} />
                          </P.PhotoPosOne>
                          <P.PhotoPosTwo>
                            <PhotoBox index={1} setImagePreview={setImagePreview} imagePreview={imagePreviews[1]} />
                          </P.PhotoPosTwo>
                          <P.PhotoPosThree>
                            <PhotoBox index={2} setImagePreview={setImagePreview} imagePreview={imagePreviews[2]} />
                          </P.PhotoPosThree>
                          <P.PhotoPosFour>
                            <PhotoBox index={3} setImagePreview={setImagePreview} imagePreview={imagePreviews[3]} />
                          </P.PhotoPosFour>
                        </P.PhotoPos>
                      </P.PhotoPosBox>
                    </P.PhotoFrame>
                    <P.FrameStyle>
                      <P.FrameImg src={PhotoFS} alt="프레임 스타일" />
                    </P.FrameStyle>
                  </P.CaptureFrame>
                </P.FrameCenter>
              </P.Photo>
              <Footer />
            </C.Phone>
          </P.Background>
        </C.Area>
      </C.Page>
    </>
  );
}

export default Photo;

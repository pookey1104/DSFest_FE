import styled from "styled-components";
import boatImg from "../img/boat_37x44.png";

export const Background = styled.div`
  background: linear-gradient(180deg, #448BDB 0%, #6AACF3 100%);

  @media (hover: hover) and (pointer: fine) and (min-height: 801px) {
    border-radius: 12px;
  }
`;

export const Notice = styled.div`
  width: 100vw;
  min-height: calc(100vh - 183px);

  @media (hover: hover) and (pointer: fine) {
    width: 100%;
    min-height: 100%;
  }
`;
export const img_wrap = styled.div`
  display: flex;
  justify-content: right;
  margin-right: 1rem;
`;
export const img_boat = styled.img`
  width: 37px;
  height: 44px;
  margin-right: 2rem;
`;

export const wrap = styled.div``;
export const content_wrap = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  /*height:26.5rem; 고정 높이 설정, 필요하다면 제거할 수 있음 */
  padding-right: 0.1rem;
  padding-left: 0.7rem;
  padding-bottom: 1.4rem;
  margin-right: 0.5rem;
  margin-top:-0.1rem;
`;

export const box_wrap = styled.div`
  display: flex; /* flexbox를 사용하여 내부 아이템을 정렬 */
  flex-direction: column; /* 아이템을 세로로 정렬 */
  justify-content: left; /* 좌측 정렬 */
  align-items: start; /* 아이템들을 시작점에서 정렬 */
  border: 4px solid white; /* 테두리 설정 */
  border-radius: 12px; /* 테두리 둥근 설정 */
  width: 100%; /* 부모 요소의 너비를 따름 */

  padding: 1rem; /* 패딩 설정 */
  box-sizing: border-box; /* border 및 padding을 width 및 height 계산에 포함 */
`;

export const List = styled.div`
  font-size:12px;
  font-family: "AppleSDGothicNeo";
  font-weight: 400;
  color: white;
  opacity: 0.8;
`;

export const Title = styled.div`
  font-size: 15px;
  font-family: "AppleSDGothicNeo";
  font-weight: 800;
  color: white;
  margin-top: 1rem;
  margin-bottom: 0.7rem;
`;

export const Context = styled.div`
  font-size: 15px;
  font-family: "AppleSDGothicNeo";
  font-weight: 500;
  color: white;
  opacity: 0.8;
  
`;

//이미지

export const img_wrap2 = styled.div`
  display: flex;
  justify-content: center; // 이미지를 중앙 정렬
  align-items: center; // 수직 방향도 중앙 정렬
  width: 100%;
  position: relative; // 상대적 위치 설정
  box-sizing: border-box;
  margin-bottom: 3rem;
`;

export const img_exImg = styled.img`
  width: 328px;
  height: 328px;
  border: 4px solid white; /* 테두리 설정 */
  border-radius: 12px; /* 테두리 둥근 설정 */
`;

//arrow이미지

export const button = styled.div`
  display: flex;
  position: absolute; // 가장 가까운 포지셔닝된 조상에 대해 상대적으로 위치
  bottom: 0.7rem; // 컨테이너의 하단에 정렬
  width: 100%; // 너비를 이미지의 전체 너비로 설정
  justify-content: space-between; // 요소들을 양 끝에 배치
  padding: 0 10px; // 좌우 패딩으로 화살표 여백 조절
`;

// 왼쪽 화살표 스타일
export const leftArrowImg = styled.img`
  cursor: pointer; // 커서를 포인터로 변경
  margin-left: 1.7rem;
  width: 2rem;
  height: 2rem;
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')}; // show prop에 따라 visibility 조정

`;

// 오른쪽 화살표 스타일
export const rightArrowImg = styled.img`
  cursor: pointer;
  margin-right: 1.7rem;
  width: 2rem;
  height: 2rem;
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')}; // show prop에 따라 visibility 조정

`;

// 이미지 감싸는 컨테이너

// export const button = styled.div`
// display:float;
// position: absolute; // 절대 위치
//   bottom: 0; // 하단에 위치
//   left: 50%; // 왼쪽에서 50% 위치에
//   transform: translateX(-50%); // 중앙 정렬을 위해 X축 기준 50% 이동
//   color: white; // 텍스트 색상
//   font-size: 16px; // 폰트 크기

// `;

// const GalleryWrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 100%;
// `;

// const Image = styled.img`
//   width: 328px;
//   height: 328px;
// `;

// export const img_arrow = styled.img`
//   cursor: pointer;
//   width: 50px; // 화살표 이미지의 크기를 지정
//   height: 50px; // 화살표 이미지의 높이를 지정
//   display: ${({ show }) => (show ? 'block' : 'none')};
//   z-index: 1000;
// `;

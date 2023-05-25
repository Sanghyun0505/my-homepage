import styled from "styled-components";
import IphoneBg from "../../assets/IphoneBg.jpeg";

export const PortPolioWrap = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #f4f6f8;
`;

export const IphoneProContainer = styled.div`
  width: 375px;
  height: 782px;

  border: 10px solid #000000;
  border-radius: 3.5rem;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  background-image: url(${IphoneBg});
  background-size: cover;

  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);

  @media screen and (max-height: 790px) {
    height: 700px;
  }
`;

export const Able = styled.div<{ isHead?: boolean }>`
  width: 100%;
  height: ${(props) => (props.isHead ? "70px" : "200px")};

  display: flex;
  flex-direction: ${(props) => (props.isHead ? "row" : "column")};
  align-items: center;
  justify-content: ${(props) =>
    props.isHead ? "space-evenly" : "space-around"};

  color: #ffffff;
`;

export const Notch = styled.div`
  width: 110px;
  height: 30px;

  background-color: black;
  border-radius: 3rem;
  margin-left: 15px;
`;

export const Screen = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  gap: 10px;

  padding: 10px 0 0 10px;
`;

export const FootContainer = styled.div<{ isApp?: boolean }>`
  width: ${(props) => (props.isApp ? "330px" : "60px")};
  height: ${(props) => (props.isApp ? "50%" : "20%")};
  background-color: rgba(250, 250, 250, 0.8); /* 진한 반투명 흰색 */

  border-radius: ${(props) => (props.isApp ? "1.8rem" : "2rem")};
  font-size: 12px;
  color: gray;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  div {
    cursor: pointer;
  }
`;

export const AppIcon = styled.img`
  width: 50px;
  height: 50px;

  background-color: white;

  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

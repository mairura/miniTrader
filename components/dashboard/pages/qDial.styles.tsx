import styled from "styled-components";

export const QDialElement = styled.div`
  width: 100%;
  height: 82vh;
  justify-content: end;
  font-family: "Montserrat", sans-serif;
`;

export const QDialContainer = styled.div`
  padding: 2%;
  width: 100%;
  height: 100%;
  background: #211436;
  z-index: 2;
  @media (max-width: 768px) {
    padding: 0%;
    height: 85vh;
    width: 100vw;
    overflow-y: hidden;
    overflow-x: hidden;
  }
`;

export const QDialContents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  @media (max-width: 768px) {
    width: 100vw;
  }
`;

export const QDialTitle = styled.div`
  width: 100%;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  display: flex;
  padding-left: 50px;
  font-size: 36px;
  line-height: 153.52%;
  @media (max-width: 768px) {
    padding-top: 20px;
    width: 350px;
    font-size: 24px;
    text-align: center;
  }
`;

export const ProgressBox = styled.div`
  background-image: url(/bgpro3.svg);
  background-size: cover;
  background-position: center;
  background-repeat: repeat;
  display: flex;
  justify-content: space-around;
  border-radius: 51px;
  color: #fff;
  width: 57vw;
  height: 60vh;
  @media (max-width: 768px) {
    background-image: url(/bgpro2.svg);
    display: flex;
    justify-content: center;
    flex-direction: column-reverse;
    width: 90vw;
    height: 70vh;
    border-radius: 22px;
  }
`;

export const ProgressBoxLeft = styled.div`
  width: 25vw;
  padding: 20% 5% 10% 2%;
  @media (max-width: 768px) {
    padding: 3%;
    width: 90vw;
    align-items: center;
  }
`;
export const Progress = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Returns = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
  flex-direction: column;
`;

export const ReturnsData = styled.h4`
  padding: 0;
`;

export const RangeInput = styled.input.attrs({
  type: "range",
})`
  -webkit-appearance: none;
  width: 25vw;
  height: 10px;
  background: #9f19ab;
  border-radius: 12px;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  outline: none;
  &::-webkit-slider-thumb {
    appearance: none;
    width: 20px;
    height: 20px;
    background: #4dc3ff;
    border-radius: 50%;
    cursor: pointer;
  }
  &:hover {
    opacity: 1;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ReturnYears = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  text-align: center;
  height: 25vh;
  font-size: 17px;
  width: 100%;
  @media (max-width: 768px) {
    font-size: 12px;
    height: 10vh;
  }
`;

export const ReturnYearsContent = styled.div`
  display: flex;
  margin-left: 15px;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;
export const ResBtn = styled.div`
  width: 90vw;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  text-align: center;
`;
export const ResNextPageButton = styled.button`
  display: none;
  border: none;
  color: #fff;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    display: block;
    width: 60vw;
    height: 40px;
    background: #7933ff;
    border-radius: 6px;
    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;
  }
`;
export const ReturnYearsButton = styled.button`
  padding: 10px 50px;
  border: none;
  border-radius: 4px;
  background-color: #ff793e;
  color: #fff;
  font-size: 17px;
  margin: 10px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const RiskTab = styled.div`
  width: 25vw;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 19px;
  @media (max-width: 912px) {
    width: 70%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const RiskWheel = styled.div`
  margin-top: 30%;
  @media (max-width: 912px) {
    width: 100%;
    padding-top: 23%;
  }
  @media (max-width: 768px) {
    padding-top: 0%;
    margin-top: 0%;
    align-items: center;
  }
`;

export const RiskTitle = styled.h5`
  padding: 0%;
`;

export const Next = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  width: 30vw;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NextPageButton = styled.button`
  border: none;
  background-color: #7933ff;
  border-radius: 6px;
  font-size: 14px;
  color: #fff;
  text-transform: uppercase;
  width: 15vw;
  padding: 15px 30px;
  @media (max-width: 768px) {
    display: none;
  }
`;

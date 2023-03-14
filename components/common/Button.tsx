import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 24px 60px;
  gap: 10px;
  width: 25vw;
  height: 5vh;
  background: #7933ff;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  @media (max-width: 768px) {
    width: 90px;
    height: 33px;
    padding: 10px 20px;
    font-size: 16px;
  }
  @media (min-width: 768px) {
    width: 100%;
    padding: 0;
    margin: 0;
    height: 5vh;
    font-size: 13px;
  }
`;

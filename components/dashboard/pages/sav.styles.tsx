import styled from "styled-components";

export const SavingSection = styled.div`
  width: 100%;
  height: 82vh;
  background: #211436;
  padding: 20px;
  color: #fff;
  display: flex;
  justify-content: center;
  font-size: 39px;
`;

export const SavingTitle = styled.h1`
  color: #fff;
  letter-spacing: 1px;
  padding: 15px 50px;
`;

export const SavingBoxElements = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const SavingBox = styled.div`
  width: 353px;
  height: 281px;
  background-image: url(/savingsbg.svg);
  border-radius: 20px;
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 25px;
`;
export const SavingBoxTitle = styled.div`
  padding-top: 5px;
`;
export const SavingBoxData = styled.p`
  color: #fff;
  font-size: 10px;
  width: 200px;
`;
export const SavingBoxButton = styled.button`
  padding: 5px 20px;
  border-radius: 12px;
  color: #fff;
  background: #7933ff;
  border: none;
  margin-top: 35px;
  width: 300px;
  height: 56px;
  font-size: 19px;
`;
export const SavingBox1 = styled(SavingBox)``;

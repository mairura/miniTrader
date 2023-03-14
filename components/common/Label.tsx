import styled from "styled-components";

export const Label = styled.label`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  @media (max-width: 600px) {
    padding: 0;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
  @media (min-width: 768px) {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
`;
export const LabelPassword = styled.div`
  position: relative;
  width: 25vw;
  height: 25vh;
  display: flex;
  flex-direction: column;
  margin-top: 5%;
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (min-width: 768px) {
    width: 100%;
    margin: 4% 0;
  }
`;
export const LabelPasswordLogin = styled(LabelPassword)`
  height: 15vh;
  @media (min-width: 768px) {
    height: 10vh;
  }
`;
export const LabelSpan = styled.span`
  position: absolute;
  top: 25%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  @media (max-width: 768px) {
    display: inline-block;
    top: 28%;
  }
`;
export const LabelSpanSign = styled(LabelSpan)`
  top: 70%;
  @media (max-width: 768px) {
    display: inline-block;
    top: 70%;
  }
  @media (min-width: 768px) {
    display: inline-block;
    top: 67%;
  }
`;
export const LabelSpan1 = styled(LabelSpan)`
  top: 74%;
  @media (max-width: 768px) {
    display: inline-block;
    top: 68%;
  }
`;
export const LabelSpanLogin = styled(LabelSpan)`
  top: 43%;
  @media (max-width: 786px) {
    top: 45%;
  }
  @media (min-width: 786px) {
    top: 57%;
  }
`;
export const LabelSpanConfirm = styled(LabelSpan)`
  top: 28%;
  @media (max-width: 786px) {
    top: 32%;
  }
`;
export const LabelSpanConfirm1 = styled(LabelSpan)`
  top: 59%;
  @media (max-width: 786px) {
    top: 68%;
  }
`;

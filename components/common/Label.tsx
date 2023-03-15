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
  width: 100%;
  height: 10vh;
`;
export const LabelPasswordLogin = styled(LabelPassword)`
  height: 15vh;
  @media (min-width: 768px) {
    height: 10vh;
  }
`;
export const LabelSpan = styled.span`
  position: absolute;
  top: 30px;
  right: 10px;
  cursor: pointer;
  @media (max-width: 600px) {
    top: 15px;
  }
  @media (min-width: 768px) {
    top: 40px;
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

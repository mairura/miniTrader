import styled from "styled-components";

export const Label = styled.label`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  @media (max-width: 320px) {
    font-size: 10px;
  }
  @media (min-width: 320px) and (max-width: 600px) {
    font-size: 15px;
  }
  @media (min-width: 768px) {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
`;
export const LabelPassword = styled.div`
  position: relative;
  display: inline-block;
`;
export const LabelSpan = styled.span`
  position: absolute;
  right: 10px;
  cursor: pointer;
  top: 50%;
`;
export const LabelSpanLogin = styled(LabelSpan)`
  position: absolute;
  right: 10px;
  cursor: pointer;
  top: 50%;
  transform: translateY(-50%);
`;
export const LabelSpanConfirm = styled(LabelSpan)`
  position: absolute;
  top: 35px;
  right: 10px;
  cursor: pointer;
  @media (max-width: 600px) {
    top: 25px;
  }
`;

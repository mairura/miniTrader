import { Button } from "@/components/common/Button";
import { Grid } from "@/components/common/Grid";
import { Header } from "@/components/common/Header";
import { Paragraph } from "@/components/common/Paragraph";
import styled from "styled-components";

export const LandingHeader = styled(Header)`
  font-style: normal;
  font-weight: 800;
  line-height: 150%;
  @media (max-width: 768px) {
    display: flex;
    font-size: 32px;
    text-align: center;
    justify-content: center;
  }
  @media (min-width: 769px) and (max-with: 1200px){
    font-size: 30px;
  }
`;
export const LandingGrid = styled(Grid)`
  padding: 150px 100px;
  @media (max-width: 768px) {
    padding: 106px 20px;
  }
`;
export const LandingParagraph = styled(Paragraph)`
  font-size: 36px;
  line-height: 150%;
  @media (max-width: 768px) {
    display: flex;
    font-size: 16px;
    text-align: center;
  }
`;
export const LandingLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 26px 0px;
  gap: 25px;
  @media (max-width: 768px) {
    padding-top: 200px;
    justify-content: center;
  }
`;
export const LandingButton = styled(Button)`
  width: 338px;
  height: 84px;
  margin: 20px 0px;
  @media (max-width: 768px) {
    width: 152px;
    height: 41px;
    font-size: 14px;
  }
`;

import { Button } from "@/components/common/Button";
import { Grid } from "@/components/common/Grid";
import { Header } from "@/components/common/Header";
import { Paragraph } from "@/components/common/Paragraph";
import styled from "styled-components";

export const LandingGrid = styled(Grid)`
  padding: 150px 100px;
  @media (max-width: 768px) {
    padding: 106px 20px;
  }
`;
export const LandingHeader = styled(Header)`
  font-style: normal;
  font-weight: 800;
  @media (max-width: 768px) {
    display: flex;
    font-size: 32px;
    text-align: center;
    justify-content: center;
  }
  @media (min-width: 769px){
    font-size: 3rem;
  }
`;
export const LandingParagraph = styled(Paragraph)`
  line-height: 150%;
  @media (max-width: 768px) {
    display: flex;
    font-size: 16px;
    text-align: center;
  }
  @media (min-width: 769px){
    font-size: 2rem;
    line-height: 70%;
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
  @media (min-width: 769px){
    padding: 16px 0;
  }
`;
export const LandingButton = styled(Button)`
  margin: 8px 0px;
  @media (max-width: 768px) {
    width: 152px;
    height: 41px;
    font-size: 14px;
  }
  @media (min-width: 769px){
    width: 338px;
    height: 74px;
    margin: 0;
  }
`;

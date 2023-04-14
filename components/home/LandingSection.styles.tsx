import { Button } from '@/components/common/Button';
import { Grid } from '@/components/common/Grid';
import { Header } from '@/components/common/Header';
import { Paragraph } from '@/components/common/Paragraph';
import styled from 'styled-components';

export const LandingGrid = styled(Grid)`
  padding: 250px 100px;
  @media (max-width: 768px) {
    padding: 106px 20px;
  }
  @media (min-width: 769px) and (max-width: 1200px) {
    padding: 156px 20px;
  }
  @media (min-width: 1201px) and (max-width: 1400px) {
    padding: 126px 30px;
  }
  @media (min-width: 1401px) {
    padding: 126px 30px;
  }
`;
export const LandingHeader = styled(Header)`
  font-style: normal;
  font-weight: 800;
  font-size: 4.5rem;
  @media (max-width: 768px) {
    display: flex;
    text-align: center;
    font-size: 2rem;
    justify-content: center;
  }
  @media (min-width: 769px) and (max-width: 990px) {
    font-size: 2.5rem;
    padding: 0;
    grid-gap: 0;
  }
  @media (min-width: 991px) and (max-width: 1200px) {
    font-size: 3rem;
    padding: 0;
  }
  @media (min-width: 1201px) and (max-width: 1400px) {
    font-size: 3.5rem;
    padding: 0;
  }
  @media (min-width: 1401px) {
    font-size: 4.5rem;
  }
`;
export const LandingParagraph = styled(Paragraph)`
  line-height: 150%;
  text-shadow: 1px 1px 1px #000, 6px 8px 8px #000;
  @media (max-width: 768px) {
    display: flex;
    font-size: 16px;
    text-align: center;
  }
  @media (min-width: 769px) {
    font-size: 1.5rem;
    line-height: 100%;
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
  @media (min-width: 769px) {
    padding: 16px 0;
  }
`;
export const LandingButton = styled(Button)`
  margin: 8px 0px;
  padding: 20px;
  @media (max-width: 768px) {
    width: 152px;
    height: 41px;
    font-size: 14px;
  }
  @media (min-width: 769px) {
    width: 338px;
    height: 74px;
    margin: 0;
  }
`;
export const LandingButtonTop = styled(Button)`
  margin: 8px 0px;
  position: absolute;
  top: 80vh;
  @media (max-width: 768px) {
    width: 152px;
    font-size: 14px;
  }
  @media (min-width: 769px) and (max-width: 990px) {
    width: 338px;
    margin-top: 40px;
  }
  @media (min-width: 991px) and (max-width: 1200px) {
    width: 338px;
    margin-top: 30px;
  }
  @media (min-width: 1201px) and (max-width: 1400px) {
    width: 338px;
    margin-top: 60px;
  }
  @media (min-width: 1401px) {
    width: 338px;
    margin-top: 60px;
  }
`;

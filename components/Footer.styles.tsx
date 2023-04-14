import styled from 'styled-components';
import { Grid } from './common/Grid';
import { Header } from './common/Header';
import { Paragraph } from './common/Paragraph';
import { StartedImage } from './home/GetStartedSection.styles';

export const FooterGrid = styled.div`
  display: flex;
  z-index: 1;
  position: relative;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const FooterWrapper = styled.div`
  height: 100%;
  flex-direction: column;
  justify-content: start;
  padding: 30px;
`;

export const FooterImage = styled(StartedImage)`
  padding: 10px 0px;
  justify-content: start;
  svg {
    width: 181px;
    height: 80px;
  }
`;

export const FooterParagraph = styled(Paragraph)`
  text-align: start;
  font-size: 16px;
  line-height: 19px;
  cursor: pointer;
`;

export const FooterHeader = styled(Header)`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  padding: 10px 0px;
`;

export const FooterIcons = styled(Grid)`
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  padding: 20px 0px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    img {
      background-color: transparent;
      border-radius: 50%;
    }
  }
`;

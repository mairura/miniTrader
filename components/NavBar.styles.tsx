import styled from 'styled-components';
import { Grid } from './common/Grid';

export const NavbarElement = styled.div`
  position: absolute;
  width: 100%;
  padding: 30px;
  @media (max-width: 768px) {
    padding: 0px;
    display: flex;
    align-items: center;
  }
`;
export const NavbarBody = styled(Grid)`
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }
`;

export const NavbarGrid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: baseline;
  padding: 0px 50px;
  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    padding: 0px;
  }
`;
export const NavbarIcon = styled.div`
  padding: 10px 50px;
  @media (max-width: 768px) {
    padding: 20px;
    img {
      width: 80%;
    }
  }
`;

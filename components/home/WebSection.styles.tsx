import styled from 'styled-components';
import { NavbarBody } from '../NavBar.styles';
export const WebBody = styled.div`
  padding: 0px 0px 100px 0px;
`;

export const WebGrid = styled(NavbarBody)`
  padding: 4em;
  @media (max-width: 768px) {
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const WebGridItem = styled.div`
  width: 100%;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const WebGridItemText = styled.div`
  font-weight: 400;
  font-size: 21px;
  line-height: 150%;
  padding: 20px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: #faf8f8;
`;

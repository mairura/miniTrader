import styled from 'styled-components';

export const DashboardElements = styled.div`
  flex-direction: row;
  height: 100vh;
  width: 15vw;
  position: relative;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ElementKeymap = styled.div`
  background: #2e1d50;
  width: 100%;
  height: 100vh;
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
  height: 18vh;
`;

export const BackArrow = styled.div`
  margin-left: 10px;
  cursor: pointer;
`;

export const NavLogo = styled.div`
  margin-right: 10px;
  svg {
    height: 86px;
    width: 100%;
  }
`;

export const MiniImg = styled.div`
  background: url(/Minibg.svg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 250px;
  padding-top: 20px;
`;

export const KeymapItems = styled.div`
  display: flex;
  font-family: 'Montserrat', sans-serif;
  flex-direction: column;
  color: #fff;
  justify-items: center;
  padding-top: 10px;
  margin-left: 10px;
  width: 100%;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`;

export const KeyFrame = styled.div`
  padding-left: 11px;
  width: 100%;
  color: #fff;
  height: 50px;
  font-weight: 400;
  font-size: 20px;
  justify-content: start;
  align-items: center;
  display: flex;
  margin: 5px 0;
  &:hover {
    background: rgba(196, 196, 196, 0.33);
    cursor: pointer;
    width: 90%;
    border-radius: 5px;
    padding: 5px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    &:hover {
      background: rgba(196, 196, 196, 0.33);
      cursor: pointer;
      margin-left: 10px;
      width: 90%;
    }
  }
  @media (min-width: 768px) and (max-width: 990px) {
    display: flex;
    flex-direction: column;
    text-align: left;
    font-size: 13px;
    padding-left: 5px;
    margin: 10px 0;
  }
  @media (min-width: 991px) and (max-width: 1200px) {
    font-size: 14px;
  }
  @media (min-width: 1201px) {
    font-size: 16px;
  }
`;

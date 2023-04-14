import styled from 'styled-components';

export const DashboardSection = styled.div`
  position: relative;
  width: 85vw;
  background: rgba(46, 29, 80, 0.44);
  font-family: 'Montserrat', sans-serif;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const HambugerMenu = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const NavElements = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  justify-items: center;
  align-items: center;
  height: 18vh;
  width: auto;
  background: #211446;
  @media (max-width: 768px) {
    display: flex;
    height: 15vh;
    justify-content: space-around;
  }
  @media (min-width: 768px) {
    padding: 0 20px;
  }
`;

export const NavQDial = styled.div`
  height: 100%;
  width: 100%;
`;

export const NavMessage = styled.div`
  color: #fff;
  font-size: 16px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const SearchInput = styled.input`
  border: 1px solid rgba(201, 201, 201, 0.88);
  box-sizing: border-box;
  padding: 10px;
  border-radius: 20px;
  width: 481px;
  height: 69px;
  background: transparent;
  color: #fff;
  font-size: 16px;
  @media (max-width: 768px) {
    display: none;
  }
  @media (min-width: 768px) and (max-width: 990px) {
    width: 200px;
  }
  @media (min-width: 991px) and (max-width: 1200px) {
    width: 300px;
  }
`;

export const UserProfile = styled.div`
  display: flex;
  color: #fff;
  font-weight: 400;
  font-size: 24px;
  align-items: center;
  gap: 1em;
  @media (max-width: 768px) {
    font-size: 9px;
    display: none;
  }
`;

export const ConnectButton = styled.div`
  display: none;
  background: #7933ff;
  border-radius: 3px;
  width: 90px;
  height: 33px;
  padding: 5px 10px;
  color: #fff;
  @media (max-width: 768px) {
    display: block;
  }
`;
export const MobiButton = styled.div`
  margin-top: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const MobileConnect = styled(ConnectButton)`
  width: 200px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const NavIcon = styled(UserProfile)`
  justify-content: center;
`;

//----------------Mobile View------------
export const MobileView = styled.div`
  height: 100vh;
  background: #2e1d50;
`;
export const MobileContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: url(/Minibg.svg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 180px;
`;
export const MobImg = styled.div``;

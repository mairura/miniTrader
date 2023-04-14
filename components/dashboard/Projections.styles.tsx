import { Button } from '@/components/common/Button';
import styled from 'styled-components';

export const MainBg = styled.div`
  font-family: 'Montserrat', sans-serif;
  background: #211436;
  height: 82vh;
  display: flex;
  justify-content: center;
`;
//-------- Strategies Page ----------
export const StrategiesContainer = styled.div`
  position: relative;
  width: 65vw;
  height: auto;
  background: #2c1853;
  border-radius: 2.4em;
  margin: 4em;
  padding: 5em;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 1em;
    padding: 1em;
    width: 90vw;
  }
`;
export const StrategiesHeader = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 2.6rem;
  color: #ece8e8;
  padding-bottom: 0.5em;
  text-transform: capitalize;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  @media (min-width: 769px) and (max-width: 900px) {
    font-size: 1.5rem;
  }
`;
export const StrategiesContent = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  border: 2px solid #d0e8f8;
  border-radius: 0.6em;
  padding: 1em 5em;
  margin-bottom: 2.6em;
  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 1em;
  }
  @media (min-width: 769px) and (max-width: 1200px) {
    display: flex;
    justify-content: space-evenly;
    padding: 10px;
  }
`;
export const StrategiesName = styled.p`
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height: 153.52%;
  color: #d0e8f8;
  @media (max-width: 768px) {
    font-size: 0.5rem;
  }
  @media (min-width: 769px) and (max-width: 1200px) {
    font-size: 0.8rem;
  }
`;
export const StrategiesData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const StrategiesBtn = styled.button`
  border: 1px solid #d9d9d9;
  border-radius: 0.6em;
  padding: 0.7em 5em;
  text-transform: uppercase;
  background: transparent;
  color: #fff;
  cursor: pointer;
  @media (max-width: 768px) {
    padding: 0.3rem;
    font-size: 12px;
    height: 30px;
  }
  @media (min-width: 769px) and (max-width: 990px) {
    padding: 14px;
    margin-left: 15px;
  }
`;

// export const ModalContainer = styled.div`
//   backdrop-filter: blur(10px);
//   width: 100%;
// `;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding: 1em;
  @media (max-width: 768px) {
    padding: 0.4rem;
  }
`;
export const ModalBtn = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`;
export const ModalBtnIcon = styled.p`
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
`;
export const ModalData = styled.div`
  padding: 5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    padding: 1em;
  }
`;
export const ModalBodyHeader = styled(StrategiesHeader)`
  display: flex;
  text-align: center;
  font-size: 2rem;
`;
export const ModalPay = styled.div`
  position: relative;
  display: inline-block;
`;
export const ModalPaySpan = styled.span`
  position: absolute;
  left: 0;
  cursor: pointer;
  top: 70%;
  transform: translateY(-50%);
  color: #fff;
  background: #402771;
  border-radius: 0.7em;
  padding: 0.8em;
  margin-left: 0.4em;
  @media (max-width: 768px) {
    padding: 0.4em;
  }
`;
export const ModalInput = styled.input`
  box-sizing: border-box;
  padding: 10px 3.5em;
  border: ${(props: any) => `1px solid ${props.borderColor || '#c4c4c4'}`};
  border-radius: 0.7em;
  width: 100%;
  height: 5vh;
  background: transparent;
  color: #fff;
  font-size: 16px;
  margin-top: 2em;
`;
export const ModalButton = styled(Button)`
  color: #fff;
  width: 20vw;
  margin: 4em 0;
  text-transform: uppercase;
  @media (max-width: 768px) {
    text-transform: capitalize;
    margin: 2rem 0;
    font-size: 12px;
  }
`;
export const ModalCancel = styled(Button)`
  background: transparent;
  color: #fff;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
//------- Projections --------------
export const ProjectContainer = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: left;
  width: 100%;
  margin: 1em;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const ProjectsHeader = styled.h4`
  font-style: normal;
  font-weight: 700;
  font-size: 1.6rem;
  color: #ece8e8;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    font-size: 1rem;
  }
  @media (min-width: 769px) and (max-width: 1200px) {
    font-size: 2rem;
  }
  @media (min-width: 1201px) {
    font-size: 3rem;
  }
`;

export const ProjectContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr 5fr;
  padding: 1em;
  /* margin: 0 auto; */
  /* width: 100%; */
  @media (min-width: 768px) and (max-width: 990px) {
    width: 75vw;
  }
`;
export const ProjectGrid = styled.div`
  position: relative;
  width: 22vw;
  height: 20vh;
  background: #2c1853;
  border-radius: 2.4em;
  padding: 1em;
  color: #ece8e8;
  margin: 0 20px;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    padding: 1em 0.4em;
    height: 150px;
    border-radius: 1em;
    margin: 0 5px;
  }
  @media (min-width: 768px) and (max-width: 990px) {
    width: 20vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const ProjectCash = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 1rem;
  padding: 1.5em;
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
  @media (min-width: 769px) and (max-width: 990px) {
    display: flex;
    justify-content: center;
    text-align: left;
  }
`;
export const Amount = styled.h6`
  font-size: 3rem;
  padding-bottom: 0.5em;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  @media (min-width: 769px) and (max-width: 990px) {
    font-size: 1.7rem;
  }
`;
export const ProgressData = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 991px) and (max-width: 1200px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 1201px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 1400px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
  }
`;
export const ProgressChart = styled.div`
  display: block;
  width: 150px;
  height: 150px;
  @media (max-width: 330px) {
    width: 30px;
    height: 30px;
  }
  @media (min-width: 331px) and (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
  @media (min-width: 769px) and (max-width: 990px) {
    width: 50px;
    height: 50px;
  }
  @media (min-width: 991px) and (max-width: 1200px) {
    width: 95px;
    height: 95px;
  }
  @media (min-width: 1201px) {
    width: 100px;
    height: 100px;
  }
`;
export const RateText = styled.h3`
  width: 150px;
  text-align: left;
  color: #ece8e8;
  @media (max-width: 330px) {
    font-size: 10px;
    inline-size: 22vw;
    overflow-wrap: break-word;
  }
  @media (min-width: 331px) and (max-width: 768px) {
    font-size: 12px;
    width: 100%;
    padding-top: 0.5em;
  }
  @media (min-width: 769px) and (max-width: 990px) {
    font-size: 19px;
    padding: 0.8em 0 0 1em;
  }
  @media (min-width: 991px) {
    font-size: 19px;
    padding-left: 1em;
  }
`;
export const ProjectionsHeader = styled.h3`
  font-size: 1.5rem;
  padding: 1em;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

export const ProjectDetails = styled.div`
  background: #2c1853;
  border-radius: 24px;
  padding: 1.5em 2em;
  margin-top: 1em;
  @media (min-width: 768px) and (max-width: 990px) {
    font-size: 12px;
    margin: 20px auto;
    width: 75vw;
  }
  @media (min-width: 991px) and (max-width: 1200px) {
    width: 75vw;
    margin: 20px auto;
  }
`;

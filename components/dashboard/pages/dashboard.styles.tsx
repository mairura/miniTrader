import { Button } from "@/components/common/Button";
import styled from "styled-components";

export const MainBg = styled.div`
  font-family: "Montserrat", sans-serif;
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
  @media (max-width: 768px){
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 1em;
    padding: 1em;
    width: 100%;
  }
`;
export const StrategiesHeader = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 3.6rem;
  color: #ece8e8;
  padding-bottom: 0.5em;
  @media (max-width: 768px){
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
  @media (max-width: 768px){
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 1em;
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
  @media (max-width: 768px){
    font-size: .5rem;
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
  @media (max-width: 768px){
    padding: .3rem;
    font-size: 12px;
    height: 30px;
  }
`;
export const ModalContainer = styled.div`
  position: absolute;
`;
export const ModalHeader = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding: 1em;
  @media (max-width: 768px){
    padding: .4rem;
  }
`;
export const ModalBtn = styled.button`
  border: none;
  background: transparent;
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
  @media (max-width: 768px){
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
  @media (max-width: 768px){
    padding: .4em;
  }
`;
export const ModalInput = styled.input`
  box-sizing: border-box;
  padding: 10px 3.5em;
  border: 1px solid #c4c4c4;
  border-radius: 0.7em;
  width: 20vw;
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
  @media (max-width: 768px){
    text-transform: capitalize;
    margin: 2rem 0;
    font-size: 12px;
  }
`;
export const ModalCancel = styled(Button)`
  background: transparent;
  color: #fff;
  @media (max-width: 768px){
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

`;
export const ProjectsHeader = styled.h4`
  font-style: normal;
  font-weight: 700;
  font-size: 1.6rem;
  color: #ECE8E8;
  @media (max-width: 768px){
    display: flex;
    justify-content: center;
  }
`;
export const ProjectContent = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
padding-top: 1em;
`;
export const ProjectGrid  =styled.div`
position: relative;
width: 22vw;
height: 20vh;
background: #2C1853;
border-radius: 2.4em;
padding: 2em;
@media (max-width: 768px){
  border: 1px solid green;
  padding: 1em 0.4em;
  height: 150px;
  border-radius: 1em;
}
`
export const ProjectCash = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-weight: 500;
font-size: 1rem;
padding: 1.5em;
@media (max-width: 768px){
  font-size: .7rem;
}
`
export const Amount  = styled.h6`
font-size: 3rem;
padding-bottom: .5em;
@media (max-width: 768px){
  font-size: 1rem;
}
`
export const ProgressData = styled.div`
position: absolute;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
text-align: center;
@media (max-width:768px){
  display: flex;
  flex-direction: column;
}
`
export const ProgressChart = styled.div`
  width: 150px;
  height: 150px;
  @media (max-width: 768px){
    width: 50px;
    height: 50px;
  }
`
export const RateText = styled.h3`
width: 150px;
text-align: left;
margin-left: .5em;
@media (max-width: 768px){
  font-size: 12px;
  width: 50px;
  padding-top: .5em;
}
`
export const ProjectionsHeader = styled.h3`
font-size: 1.5rem;
padding: 1em;
@media (max-width: 768px){
    display: flex;
    justify-content: center;
  }
`

export const ProjectDetails  =styled.div`
background: #2C1853;
border-radius: 24px;
padding: 1.5em 2em;
margin-top: 1em;
`
import styled from "styled-components";
import { Button } from "../common/Button";

export const AuthWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #19123b;
`;
export const AuthContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(/Form.svg);
  padding: 7% 12%;
  color: #fff;
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  height: 100%;
`;
export const AuthBody = styled.div`
  width: 80vw;
  height: 100%;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    height: 70%;
  }
`;
export const AuthTitle = styled.div`
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  padding-top: 5%;
  display: flex;
  align-items: center;
  @media (max-width: 400px) {
    font-size: 20px;
    line-height: 20px;
    padding: 0;
  }
  @media (max-width: 768px) {
    font-size: 22px;
  }
  @media (min-width: 768px) {
    padding: 0;
    font-size: 20px;
  }
`;
export const Italics = styled.i`
  font-size: 12px;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;
export const AuthButton = styled(Button)`
  height: 5vh;
  margin: 20px 0px;
  color: #fff;
  @media (max-width: 400px) {
    padding: 0;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 50px;
  }
`;
export const CheckData = styled.div`
  display: flex;
  justify-content: start;
  margin-top: 3%;
`;
export const CheckInput = styled.input.attrs({ type: "checkbox" })`
  displa: flex;
  justify-content: start;
  margin-right: 5px;
  background: transparent;
`;
//---------Login Page Styles----------
export const LoginContainer = styled(AuthContainer)`
  background: url(/bgproLogin.svg);
  background-size: cover;
  background-position: center;
  background-repeat: repeat;
  height: 50%;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const LabelTitle = styled.p`
  color: #8d8bbb;
  margin-top: 40px;
  @media (max-width: 768px) {
    font-size: 13px;
  }
`;
export const SignUp = styled.p`
  transition: all 2s ease-out;
  &:hover {
    color: #7933ff;
    font-size: 15px;
  }
`;
export const LoginReset = styled.div`
  font-size: 12px;
  padding: 8px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  @media (min-width: 768px) {
    padding: 1%;
  }
`;
export const ForgotPass = styled.p`
  transition: all 2s ease-out;
  padding-left: 9px;
  cursor: pointer;
  font-size: 12px;
  &:hover {
    color: #7933ff;
    font-size: 14px;
  }
  @media (min-width: 768px) {
    padding: 5px;
  }
`;
//-------------Reset Password Page----------
export const PassContainer = styled(AuthContainer)`
  background: url(/bgproResetPass.svg);
  background-size: cover;
  background-position: center;
  background-repeat: repeat;
  height: 40vh;
  @media (max-width: 768px) {
    width: 90vw;
    height: 60vh;
    padding-top: 100px;
  }
`;
export const PassData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
`;
export const PassTitle = styled(LoginReset)`
  padding: 1px;
  color: #8d8bbb;
`;
export const BackTitle = styled(PassTitle)`
  padding-left: 10px;
  color: #fff;
  font-size: 14px;
`;
//-----------Info sent Guidelines Page-------
export const InfoContainer = styled(AuthContainer)`
  background-image: url(/bgproInfo.svg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 30vh;
  @media (max-width: 768px) {
    width: 90vw;
  }
`;
export const InfoTitle = styled(LabelTitle)`
  padding: 1px;
  margin: 0;
  padding: 5px 50px;
  align-items: center;
  display: flex;
  text-align: center;
  margin-bottom: 50px;
`;
///-------------Reset Your Password Page------
export const ResetYouPass = styled(AuthContainer)`
  background-image: url(/bgproRYP.svg);
  background-size: cover;
  background-position: center;
  height: 60vh;
  margin: 30% 2%;
`;
export const ResetTitle = styled(AuthTitle)`
  margin-top: 80px;
`;
///------------------Success Page------------
export const SuccessContainer = styled(InfoContainer)`
  background-image: url(/bgpro5.svg);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;
  @media (max-width: 768px) {
    width: 90vw;
  }
`;

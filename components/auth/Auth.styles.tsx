import styled from 'styled-components';
import { Button } from '../common/Button';

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
  padding: 2% 5% 5% 5%;
  color: #fff;
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  height: 100%;
  min-width: 300px;
  max-width: 600px;
  width: 500px;
  @media (max-width: 320px) {
    max-height: 70%;
  }
`;
export const AuthBody = styled.div`
  margin: 3%;
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
  margin: 20px 0;
  display: flex;
  align-items: center;
  @media (max-width: 320px) {
    font-size: 14px;
    padding: 0;
  }
  @media (min-width: 321px) and (max-width: 600px) {
    font-size: 20px;
    padding: 0;
  }
  @media (min-width: 601px) and (max-width: 900px) {
    padding: 0;
    font-size: 17px;
  }
  @media (min-width: 901px) {
    font-size: 25px;
    padding: 0;
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
  margin: 40px 0px;
  color: #fff;
  @media (max-width: 400px) {
    padding: 0;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 50px;
  }
`;
//-----------Login Page Styles------------
export const LoginContainer = styled(AuthContainer)`
  background: url(/bgproLogin.svg);
  background-size: cover;
  background-position: center;
  background-repeat: repeat;
  /* height: 50%; */
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 70vh;
    padding-bottom: 30px;
  }
`;
export const LogInputSpace = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const LabelTitle = styled.p`
  color: #8d8bbb;
  margin-top: 40px;
  @media (max-width: 768px) {
    font-size: 13px;
  }
`;
export const SignUp = styled.p`
  font-size: 1rem;
  &:hover {
    color: #7933ff;
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
  padding-left: 9px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    color: #7933ff;
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
  @media (max-width: 768px) {
    width: 90vw;
  }
`;
export const PassData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding-bottom: 1em;
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
  height: auto;
  width: 80vw;
  max-width: 500px;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 70vh;
  }
`;
export const InfoTitle = styled(LabelTitle)`
  margin: 20px auto;
  text-align: center;
  margin-bottom: 50px;
  width: 90%;
`;
///-------------Reset Your Password Page------
export const ResetYouPass = styled(AuthContainer)`
  background-image: url(/bgproRYP.svg);
  background-size: cover;
  background-position: center;
`;
export const ResetTitle = styled(AuthTitle)`
  margin-top: 80px;
`;
///------------------Success Page------------
export const SuccessContainer = styled(AuthContainer)`
  background-image: url(/bgpro5.svg);
  justify-content: center;
  align-items: center;
`;

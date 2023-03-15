import React from "react";
import LeftChevron from "../common/LeftChevron";
import { AuthTitle, InfoContainer, InfoTitle } from "./Auth.styles";

const Info = () => {
  return (
    <InfoContainer>
      <AuthTitle>Instructions sent</AuthTitle>
      <InfoTitle>
        Please follow the instructions sent to your email to activate your
        account
      </InfoTitle>
      <LeftChevron />
    </InfoContainer>
  );
};

export default Info;

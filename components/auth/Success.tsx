import React from "react";
import LeftChevron from "../common/LeftChevron";
import { AuthTitle, InfoTitle, SuccessContainer } from "./Auth.styles";

const Success = () => {
  return (
    <SuccessContainer>
      <AuthTitle>Success!</AuthTitle>
      <InfoTitle>
        Password reset successful. Head over to the login page to gain access
      </InfoTitle>
      <LeftChevron />
    </SuccessContainer>
  );
};

export default Success;

import React from "react";
import LeftChevron from "../common/LeftChevron";
import { AuthTitle, InfoTitle, SuccessContainer } from "./Auth.styles";

const ResetPassSuccess = () => {
  return (
    <SuccessContainer>
      <AuthTitle>Success!</AuthTitle>
      <InfoTitle>
        A link to reset your password has been sent to your email, head over to
        your email to reset your password.
      </InfoTitle>
      <LeftChevron />
    </SuccessContainer>
  );
};

export default ResetPassSuccess;

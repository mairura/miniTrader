import React, { useState } from "react";
import { Form } from "../common/Form";
import { Input } from "../common/Input";
import {
  Label,
  LabelPassword,
  LabelSpanConfirm,
  LabelSpanConfirm1,
} from "../common/Label";
import { AuthButton, ResetTitle, ResetYouPass } from "./Auth.styles";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";

const ResetYourPass = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPasswordChange = () => {
    setShowPassword(!showPassword);
  };

  return (
    <ResetYouPass>
      <ResetTitle>Reset your Password</ResetTitle>
      <Form>
        <LabelPassword>
          <Label htmlFor="password">Password</Label>
          <Input type={showPassword ? "text" : "password"} id="password" />
          <LabelSpanConfirm onClick={handleShowPasswordChange}>
            {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
          </LabelSpanConfirm>
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            type={showPassword ? "text" : "password"}
            id="confirmPassword"
          />
          <LabelSpanConfirm1 onClick={handleShowPasswordChange}>
            {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
          </LabelSpanConfirm1>
          <AuthButton type="submit">Reset</AuthButton>
        </LabelPassword>
      </Form>
    </ResetYouPass>
  );
};

export default ResetYourPass;

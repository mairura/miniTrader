import React, { useState } from "react";
import { Form } from "../common/Form";
import { Input } from "../common/Input";
import { Label, LabelPassword, LabelSpanConfirm } from "../common/Label";
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
        <Label htmlFor="password">Password</Label>
        <LabelPassword>
          <Input type={showPassword ? "text" : "password"} id="password" />
          <LabelSpanConfirm onClick={handleShowPasswordChange}>
            {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
          </LabelSpanConfirm>
        </LabelPassword>
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <LabelPassword>
          <Input
            type={showPassword ? "text" : "password"}
            id="confirmPassword"
          />
          <LabelSpanConfirm onClick={handleShowPasswordChange}>
            {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
          </LabelSpanConfirm>
        </LabelPassword>

        <AuthButton type="submit">Reset</AuthButton>
      </Form>
    </ResetYouPass>
  );
};

export default ResetYourPass;

import { useRouter } from "next/router";
import { Form } from "../common/Form";
import { Input } from "../common/Input";
import { Label, LabelPassword, LabelSpan } from "../common/Label";
import {
  AuthButton,
  AuthContainer,
  AuthTitle,
  CheckData,
  CheckInput,
  Italics,
  LoginReset,
  SignUp,
} from "./Auth.styles";
import { useMutation, gql } from "@apollo/client";
import { useState, CSSProperties } from "react";
import HashLoader from "react-spinners/HashLoader";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "gray",
};

const USER_SIGN_UP_QUERY = gql`
  mutation CreateUser(
    $username: String!
    $email: String!
    $password: String!
    $phoneNumber: String
  ) {
    createUser(
      data: {
        username: $username
        email: $email
        password: $password
        phoneNumber: $phoneNumber
      }
    ) {
      success
      error
      data {
        username
        email
      }
    }
  }
`;

export default function SignupForm() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [registerParams, setRegisterParams] = useState<{
    username: string;
    email: string;
    password: string;
    phoneNumber: string;
  }>({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPasswordChange = () => {
    setShowPassword(!showPassword);
  };

  const router = useRouter();
  const [createUser, { loading, error, data }] = useMutation(
    USER_SIGN_UP_QUERY,
    {
      onCompleted: (data: { createUser: { success: boolean } }) => {
        if (data.createUser.success == true) {
          router.push("/auth/activate");
        }
      },
    }
  );
  const handleSignUp = (e: any) => {
    e.preventDefault();
    createUser({
      variables: registerParams,
    });
  };

  function handleSetRegisterParams(e: { target: { value: any; id: any } }) {
    const inputPhoneNumber = e.target.value;
    setRegisterParams({
      ...registerParams,
      [e.target.id]: e.target.value,
    });
    const phoneNumberRegex =
      /^(\+?\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    setIsValidPhoneNumber(phoneNumberRegex.test(registerParams.phoneNumber));
  }
  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        <HashLoader
          color="blue"
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }
  if (error) {
    alert(error);
  }
  return (
    <AuthContainer>
      <AuthTitle> Signup</AuthTitle>
      <Form>
        <Label htmlFor="username">Username</Label>
        <Input
          type="text"
          id="username"
          onChange={handleSetRegisterParams}
          required
        />
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          onChange={handleSetRegisterParams}
          required
        />
        <Label htmlFor="phoneNumber">Phone</Label>
        <Input
          type="tel"
          id="phoneNumber"
          value={registerParams.phoneNumber}
          onChange={handleSetRegisterParams}
          required
        />
        {isValidPhoneNumber ? null : (
          <Italics>Please enter a valid phone number</Italics>
        )}
        <Label htmlFor="password">Password</Label>
        <LabelPassword>
          <Input
            type={showPassword ? "text" : "password"}
            value={registerParams.password}
            id="password"
            onChange={handleSetRegisterParams}
            required
          />
          <LabelSpan onClick={handleShowPasswordChange}>
            {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
          </LabelSpan>
        </LabelPassword>
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <LabelPassword>
          <Input
            type={showPassword ? "text" : "password"}
            id="confirmPassword"
            required
          />
          <LabelSpan onClick={handleShowPasswordChange}>
            {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
          </LabelSpan>
        </LabelPassword>
        <AuthButton type="submit" onClick={(e) => handleSignUp(e)}>
          Signup
        </AuthButton>
        <LoginReset>
          Already have an account?&nbsp;
          <SignUp onClick={() => router.push("/login")}>Login</SignUp>
        </LoginReset>
        <CheckData>
          <CheckInput type="checkbox" />
          <Label htmlFor="rememberme">Remember me</Label>
        </CheckData>
        <CheckData>
          <CheckInput type="checkbox" />
          <Label htmlFor="confirmPass">
            Confirm that you agree to the Terms and Conditions
          </Label>
        </CheckData>
      </Form>
    </AuthContainer>
  );
}

import { useRouter } from "next/router";
import { Form } from "../common/Form";
import { Input } from "../common/Input";
import { Label, LabelPassword, LabelSpan } from "../common/Label";
import { useState, CSSProperties } from "react";
import {
  AuthButton,
  AuthTitle,
  ForgotPass,
  LabelTitle,
  LoginContainer,
  LoginReset,
  SignUp,
} from "./Auth.styles";
import { gql, useMutation } from "@apollo/client";
import HashLoader from "react-spinners/HashLoader";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";

import toast from "react-hot-toast";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "gray",
};

const USER_LOGIN = gql`
  mutation FindUser($email: String!, $password: String!) {
    findUser(data: { email: $email, password: $password }) {
      success
      error
      data {
        jwt_token
        userData {
          email
        }
      }
    }
  }
`;

export default function LoginForm() {
  const [userEmail, setEmail] = useState<String>();
  const [userPassword, setPassword] = useState<String>();
  const router = useRouter();

  const [findUser, { loading, error, data }] = useMutation(USER_LOGIN, {
    onCompleted: (data: any) => {
      if (data.findUser.success) {
        localStorage.setItem("user", data.findUser.data.userData);
        localStorage.setItem("user_token", data.findUser.data.jwt_token);
        router.push("/dashboard");
      } else {
        // alert(data.findUser.error);
        toast.error('Failed to signup user');
      }
      // Handle mutation result here
    },
  });

  const getData = (e: any) => {
    e.preventDefault();
    findUser({ variables: { email: userEmail, password: userPassword } });
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPasswordChange = () => {
    setShowPassword(!showPassword);
  };

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
          color="#7933ff"
          cssOverride={override}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }
  if (error) {
    toast.error('Failed to login user');
  }
  return (
    <LoginContainer>
      <LabelTitle>Welcome back!👋 </LabelTitle>
      <AuthTitle>Login to your account</AuthTitle>
      <Form>
        <Label htmlFor="email">Your Email</Label>
        <Input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
        <Label htmlFor="password">Password</Label>
        <LabelPassword>
          <Input
            type={showPassword ? "text" : "password"}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
          <LabelSpan onClick={handleShowPasswordChange}>
            {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
          </LabelSpan>
        </LabelPassword>

        <AuthButton type="submit" onClick={(e) => getData(e)}>
          Login
        </AuthButton>
        <LoginReset>
          Don&#39;t have an account?&nbsp;&nbsp;
          <SignUp onClick={() => router.push("/signup")}>Signup</SignUp>
        </LoginReset>
        <ForgotPass onClick={() => router.push("/reset-password")}>
          Forgot your password?
        </ForgotPass>
      </Form>
    </LoginContainer>
  );
}

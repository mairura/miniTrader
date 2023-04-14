import {
  AuthButton,
  AuthTitle,
  ForgotPass,
  LabelTitle,
  LogInputSpace,
  LoginContainer,
  LoginReset,
  SignUp,
} from '@/components/auth/Auth.styles';
import AuthLayout from '@/components/auth/AuthLayout';
import {
  Form,
  Input,
  Label,
  LabelPassword,
  LabelSpan,
} from '@/components/common';
import { AuthContext } from '@/context';
import { validateEmail } from '@/helpers';
import { LOGIN_QUERY } from '@/queries';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { HashLoader } from 'react-spinners';
import { CSSProperties } from 'styled-components';

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'gray',
};

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: {
      value: '',
      is_valid: true,
    },
    password: {
      value: '',
      is_valid: true,
      reveal: false,
    },
  });

  const context = useContext(AuthContext);

  const [login, { loading }] = useMutation(LOGIN_QUERY, {
    onError: (error) => {
      toast.error(error.message);
    },
    onCompleted: (data: {
      login: {
        token: string;
        user: any;
        msg: string;
      };
    }) => {
      let { token, user, msg } = data?.login;
      if (token && user) {
        context.login({
          token,
          user,
        });
        router.push('/dashboard');
      } else {
        toast.error(msg);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      }
    },
  });

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100vw',
          height: '100vh',
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
  return (
    <AuthLayout>
      <LoginContainer>
        <LogInputSpace>
          <LabelTitle>Welcome back!👋 </LabelTitle>
          <AuthTitle>Login to your account</AuthTitle>
        </LogInputSpace>
        <Form>
          <Label htmlFor="email">Your Email</Label>
          <Input
            type="email"
            onChange={(e) => {
              setFormData({
                ...formData,
                email: {
                  is_valid: validateEmail(e.target.value),
                  value: e.target.value,
                },
              });
            }}
            required
          />
          {!formData.email.is_valid && (
            <p style={{ color: 'red', fontSize: '12px' }}>Invalid Email</p>
          )}
          <Label htmlFor="password">Password</Label>
          <LabelPassword>
            <Input
              type={formData.password.reveal ? 'text' : 'password'}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  password: {
                    ...formData.password,
                    value: e.target.value,
                  },
                });
              }}
              required
            />
            <LabelSpan
              onClick={() => {
                setFormData({
                  ...formData,
                  password: {
                    ...formData.password,
                    reveal: !formData.password.reveal,
                  },
                });
              }}
            >
              {formData.password.reveal ? (
                <AiFillEyeInvisible />
              ) : (
                <AiFillEye />
              )}
            </LabelSpan>
          </LabelPassword>
          <AuthButton
            type="submit"
            onClick={(e) => {
              e.preventDefault();

              if (
                !formData.email.is_valid ||
                !formData.email.value.trim() ||
                !formData.password.value.trim() ||
                !formData.password.is_valid
              ) {
                toast.error('Please fill in all fields');
                return;
              }
              login({
                variables: {
                  email: formData.email.value,
                  password: formData.password.value,
                },
              });
            }}
          >
            Login
          </AuthButton>
          <LoginReset>
            Don&#39;t have an account?&nbsp;&nbsp;
            <SignUp onClick={() => router.push('/account/signup')}>
              Signup
            </SignUp>
          </LoginReset>
          <ForgotPass onClick={() => router.push('/account/password/reset')}>
            Forgot your password?
          </ForgotPass>
        </Form>
      </LoginContainer>
    </AuthLayout>
  );
}

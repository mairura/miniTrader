import {
  AuthButton,
  AuthContainer,
  AuthTitle,
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
import { validateEmail, validatePassword, validateUsername } from '@/helpers';
import { REGISTER_QUERY } from '@/queries';
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

export default function SignupPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    username: {
      value: '',
      is_valid: true,
    },
    email: {
      value: '',
      is_valid: true,
    },
    password: {
      value: '',
      is_valid: true,
      reveal: false,
    },
    confirmPassword: {
      value: '',
      is_valid: true,
      reveal: false,
    },
  });

  const context = useContext(AuthContext);

  const [register, { loading }] = useMutation(REGISTER_QUERY, {
    onCompleted: (data: {
      register: {
        token: string;
        user: any;
        msg: string;
      };
    }) => {
      let { token, user, msg } = data?.register;
      if (token && user) {
        context.login({
          token,
          user,
        });
        router.push('/guidelines');
      } else {
        toast.error(msg);
      }
    },

    onError: (error) => {
      toast.error(error.message);
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
      <AuthContainer>
        <AuthTitle> Signup</AuthTitle>
        <Form>
          <Label htmlFor="username">Username</Label>
          <Input
            type="text"
            id="username"
            onChange={(e) => {
              setFormData({
                ...formData,
                username: {
                  value: e.target.value,
                  is_valid: validateUsername(e.target.value),
                },
              });
            }}
            required
          />
          {!formData.username.is_valid && (
            <p style={{ color: 'red', fontSize: '12px' }}>
              {' '}
              Invalid username. Username can only contain letters and numbers
            </p>
          )}

          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            onChange={(e) => {
              setFormData({
                ...formData,
                email: {
                  value: e.target.value,
                  is_valid: validateEmail(e.target.value),
                },
              });
            }}
            required
          />
          {!formData.email.is_valid && (
            <p style={{ color: 'red', fontSize: '12px' }}> Invalid email</p>
          )}

          <Label htmlFor="password">Password</Label>
          <LabelPassword>
            <Input
              type={formData.password.reveal ? 'text' : 'password'}
              value={formData.password.value}
              id="password"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  password: {
                    ...formData.password,
                    value: e.target.value,
                    is_valid: validatePassword(e.target.value),
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
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <LabelPassword>
            <Input
              type={formData.confirmPassword.reveal ? 'text' : 'password'}
              value={formData.confirmPassword.value}
              id="confirmPassword"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  confirmPassword: {
                    ...formData.confirmPassword,
                    value: e.target.value,
                    is_valid: e.target.value == formData.password.value,
                  },
                });
              }}
              required
            />
            <LabelSpan
              onClick={() => {
                setFormData({
                  ...formData,
                  confirmPassword: {
                    ...formData.confirmPassword,
                    reveal: !formData.confirmPassword.reveal,
                  },
                });
              }}
            >
              {formData.confirmPassword.reveal ? (
                <AiFillEyeInvisible />
              ) : (
                <AiFillEye />
              )}
            </LabelSpan>
          </LabelPassword>
          {formData.password.value != formData.confirmPassword.value && (
            <p style={{ color: 'red', fontSize: '12px' }}>
              Passwords do not match
            </p>
          )}
          <AuthButton
            type="submit"
            onClick={(e) => {
              e.preventDefault();

              if (
                !formData.username.is_valid ||
                !formData.username.value ||
                !formData.email.is_valid ||
                !formData.email.value ||
                !formData.password.is_valid ||
                !formData.password.value ||
                !formData.confirmPassword.is_valid ||
                !formData.confirmPassword.value
              ) {
                toast.error('Please fill in all fields correctly');
                return;
              }

              register({
                variables: {
                  username: formData.username.value,
                  email: formData.email.value,
                  password: formData.password.value,
                },
              });
            }}
          >
            Signup
          </AuthButton>
          <LoginReset>
            Already have an account?&nbsp;
            <SignUp onClick={() => router.push('/account/login')}>Login</SignUp>
          </LoginReset>
        </Form>
      </AuthContainer>
    </AuthLayout>
  );
}

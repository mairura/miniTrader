import {
  AuthButton,
  AuthTitle,
  BackTitle,
  InfoTitle,
  PassContainer,
  PassData,
  PassTitle,
} from '@/components/auth/Auth.styles';
import AuthLayout from '@/components/auth/AuthLayout';
import { Form, Input, Label } from '@/components/common';
import LeftChevron from '@/components/common/LeftChevron';
import { validateEmail } from '@/helpers';
import { PASSWORD_RESET_QUERY } from '@/queries';
import { useMutation } from '@apollo/client';
import Image from 'next/image';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { HashLoader } from 'react-spinners';
import styled, { CSSProperties } from 'styled-components';

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'gray',
};

const BackChevron = styled.button`
  background: transparent;
  border: none;
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  color: #fff;
  margin-top: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export default function ResetPasswordPage() {
  const [formData, setFormData] = useState({
    email: {
      value: '',
      is_valid: true,
    },
    submitted: false,
  });

  const [resetPassword, { loading }] = useMutation(PASSWORD_RESET_QUERY, {
    onCompleted: (data) => {
      let { success, msg } = data?.resetPassword;
      if (success) {
        toast.success(msg);
      } else {
        toast.error(msg);
        return;
      }

      setFormData({
        ...formData,
        submitted: true,
      });
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.message || error.toString());
    },
  });

  return loading ? (
    <Wrapper>
      <HashLoader
        color="blue"
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </Wrapper>
  ) : formData.submitted ? (
    <AuthLayout title="Password Reset Success">
      <PassContainer>
        <AuthTitle>Success!</AuthTitle>
        <InfoTitle>
          Password reset successful.
          <br /> Check Email <br />
          Retry for invalid email&nbsp;!
        </InfoTitle>
        <BackChevron>
          <Image
            src="/LeftChevron.svg"
            height={12}
            width={11}
            alt="leftchevron"
          />
          <BackTitle
            style={{
              cursor: 'pointer',
            }}
            onClick={() => setFormData({ ...formData, submitted: false })}
          >
            Back to Reset Password
          </BackTitle>
        </BackChevron>
      </PassContainer>
    </AuthLayout>
  ) : (
    <AuthLayout>
      <PassContainer>
        <PassData>
          <AuthTitle>Reset Password</AuthTitle>
          <PassTitle>
            Don&#39;t fret, we’ll send you reset instructions
          </PassTitle>
        </PassData>
        <Form>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            required
            onChange={(e) =>
              setFormData({
                ...formData,
                email: {
                  value: e.target.value,
                  is_valid: validateEmail(e.target.value),
                },
              })
            }
          />
          {!formData.email.is_valid && (
            <p style={{ color: 'red' }}>Please enter a valid email address</p>
          )}
          <AuthButton
            type="submit"
            onClick={(e) => {
              e.preventDefault();

              if (!formData.email.value.trim()) {
                setFormData({
                  ...formData,
                  email: {
                    value: '',
                    is_valid: false,
                  },
                });
                return;
              }

              resetPassword({ variables: { email: formData.email.value } });
            }}
          >
            Reset Password
          </AuthButton>
          <LeftChevron />
        </Form>
      </PassContainer>
    </AuthLayout>
  );
}

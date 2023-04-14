import {
  AuthButton,
  ResetTitle,
  ResetYouPass,
} from '@/components/auth/Auth.styles';
import AuthLayout from '@/components/auth/AuthLayout';
import {
  Form,
  Input,
  Label,
  LabelPassword,
  LabelSpan,
} from '@/components/common';
import { validatePassword } from '@/helpers';
import { UPDATE_PASSWORD_QUERY } from '@/queries';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { useState } from 'react';
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

    // email: {
    //   value: "",
    //   is_valid: true,
    // },
  });

  const [updatePassword, { loading }] = useMutation(UPDATE_PASSWORD_QUERY, {
    onCompleted: (data: {
      updatePassword: { success: boolean; msg: string };
    }) => {
      if (!data.updatePassword.success) {
        toast.error(data.updatePassword.msg);
        return;
      }

      toast.success('Password updated successfully');
      router.push('/account/login');
    },
    onError: (error) => {
      toast.error(error.toString());
    },
  });

  return loading ? (
    <HashLoader
      color="#7933ff"
      cssOverride={override}
      size={100}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  ) : (
    <AuthLayout title="Minitraderr | Password Reset Page">
      <ResetYouPass>
        <ResetTitle>Reset your Password</ResetTitle>
        <Form>
          <Label htmlFor="password">Password</Label>
          <LabelPassword>
            <Input
              type={formData.password.reveal ? 'text' : 'password'}
              id="password"
              required
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
              id="confirmPassword"
              required
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

          <AuthButton
            type="submit"
            onClick={(e) => {
              e.preventDefault();

              if (
                !formData.password.is_valid ||
                !formData.confirmPassword.is_valid ||
                !formData.password.value ||
                !formData.confirmPassword.value
              ) {
                toast.error('Password is not valid');
                return;
              }
              updatePassword({
                variables: {
                  token: router.query.token,
                  password: formData.password.value,
                },
              });
            }}
          >
            RESET
          </AuthButton>
        </Form>
      </ResetYouPass>
    </AuthLayout>
  );
}

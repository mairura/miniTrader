import AuthLayout from '@/components/auth/AuthLayout';
import { VERIFY_EMAIL_QUERY } from '@/queries';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import React, { useEffect, useRef } from 'react';
import { toast } from 'react-hot-toast';

function VerifyAccountPage() {
  const router = useRouter();
  const toastId = useRef('');

  const [verifyEmail, { data, loading }] = useMutation(VERIFY_EMAIL_QUERY, {
    onCompleted: (data: { verifyEmail: { msg: string; success: boolean } }) => {
      if (data.verifyEmail.success) {
        toast.success(data.verifyEmail.msg, {
          id: toastId.current,
        });
        router.push('/account/login');
      } else {
        toast.error(data.verifyEmail.msg, {
          id: toastId.current,
        });
      }
    },
    onError: (error) => {
      toast.error(error.message || error.toString());
    },
  });

  useEffect(() => {
    if (router.query.token) {
      toastId.current = toast.loading('Verifying your account. Please wait...');
      verifyEmail({
        variables: {
          token: router.query.token,
        },
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query]);

  return (
    <AuthLayout title="Minitrader | Verify Account Page">
      {loading && (
        <p>
          Verifying your account. Please wait. If this takes too long, please
          contact support.
        </p>
      )}
      {!loading && data && (
        <p>Email verification failed {data?.verifyEmail.msg}</p>
      )}
    </AuthLayout>
  );
}

export default VerifyAccountPage;

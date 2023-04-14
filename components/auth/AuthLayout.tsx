import Head from 'next/head';
import { AuthBody, AuthWrapper } from '../auth/Auth.styles';

export default function AuthLayout({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <div>
      <Head>
        <title>{title || 'Minitrader Authentication'}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AuthWrapper>
        <AuthBody className="auth-form">{children}</AuthBody>
      </AuthWrapper>
    </div>
  );
}

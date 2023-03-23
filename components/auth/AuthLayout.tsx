import Head from "next/head";
import { AuthBody, AuthWrapper } from "../auth/Auth.styles";


export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) { 
  return (
    <div>
      <Head>
        <title>MiniTrade Authentication</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AuthWrapper>
      
          <AuthBody className="auth-form">{children}</AuthBody>
      
      </AuthWrapper>
    </div>
  );
}

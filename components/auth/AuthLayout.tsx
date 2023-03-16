import Head from "next/head";
import { AuthBody, AuthWrapper } from "../auth/Auth.styles";
import HashLoader from "react-spinners/HashLoader";
import { useState, useEffect, CSSProperties } from "react";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "gray",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <div>
      <Head>
        <title>MiniTrade Authentication</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AuthWrapper>
        {loading ? (
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
        ) : (
          <AuthBody className="auth-form">{children}</AuthBody>
        )}
      </AuthWrapper>
    </div>
  );
}

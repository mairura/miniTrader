import { Layout } from "@/components";

import {
  LandingSection,
  GetStartedSection,
  SelectingSection,
  WebSection,
} from "@/components/home";
import HashLoader from "react-spinners/HashLoader";
import { useState, useEffect, CSSProperties } from "react";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "gray",
};

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000);
  }, []);

  return (
    <>
      {loading ? (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100vw",
              height: "100vh",
              backgroundColor: " #19123b",
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
        </>
      ) : (
        <>
          <Layout>
            <LandingSection />
            <WebSection />
            <GetStartedSection />
            <SelectingSection />
          </Layout>
        </>
      )}
    </>
  );
}

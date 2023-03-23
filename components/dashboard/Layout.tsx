import React from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import styled from "styled-components";
import HashLoader from "react-spinners/HashLoader";
import { useState, useEffect, CSSProperties } from "react";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "gray",
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  width: 100%;
  height: 100%;
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000);
  }, []);

  return (
    <>  
      <Container>
        <SideBar />
        <div>
          <Navbar />
          {children}
        </div>
      </Container>
    </>
  );
};

export default Layout;

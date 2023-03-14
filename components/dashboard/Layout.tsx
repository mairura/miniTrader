import React from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import styled from "styled-components";

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

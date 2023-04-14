import React, { ReactNode, useContext, useEffect } from 'react';
import Navbar from './Navbar';
import SideBar from './SideBar';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { AuthContext } from '@/context';
import NoSSR from 'react-no-ssr';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  width: 100%;
  height: 100%;
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const Layout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user) {
      router.push('/account/login');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <Container>
        <NoSSR>
          <SideBar />
          <div>
            <Navbar />
            {children}
          </div>
        </NoSSR>
    </Container>
  );
};

export default Layout;

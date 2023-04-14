import Image from 'next/image';
import React from 'react';
import { BackTitle } from '../auth/Auth.styles';
import styled from 'styled-components';
import Link from 'next/link';

const BackToLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BackChevron = styled.button`
  background: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  margin-top: 20px;
  cursor: pointer;
`;

const LeftChevron = () => {
  return (
    <BackToLogin>
      <Link href="/account/login">
        <BackChevron>
          <Image
            src="/LeftChevron.svg"
            height={12}
            width={11}
            alt="leftchevron"
          />
          <BackTitle>Back to Login</BackTitle>
        </BackChevron>
      </Link>
    </BackToLogin>
  );
};

export default LeftChevron;

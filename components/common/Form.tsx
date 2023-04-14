import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (min-width: 768px) {
    height: 100%;
    width: 100%;
    padding: 0;
  }
`;

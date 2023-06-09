import styled from 'styled-components';

export const Input = styled.input`
  width: 25vw;
  height: 5vh;
  padding: 0 20px;
  margin: 4% 0;
  color: #fff;
  font-size: 14px;
  background: transparent;
  border: 1px solid #dedede;
  border-radius: 6px;
  @media (max-width: 600px) {
    padding: 0;
    margin: 2% 0;
    font-size: 1rem;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 5vh;
    font-size: 1rem;
  }
  @media (min-width: 768px) {
    width: 100%;
    margin: 5% 0;
  }
`;

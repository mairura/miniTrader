import styled from 'styled-components';

export const Photos = styled.div`
  display: flex;
  padding: 0px;
  justify-content: center;
  align-items: center;
  svg {
    width: 95%;
  }
  img {
    width: 95%;
    border-radius: 10px;
  }
  @media (max-width: 768px) {
    svg {
      width: 95%;
      height: 92%;
    }
    img {
      width: 70%;
      height: 70%;
    }
  }
`;

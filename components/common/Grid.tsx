import styled from 'styled-components';
interface FlexContainerProps {
  mobileDirection?: string;
}
export const Grid = styled.div<FlexContainerProps>`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: ${(props: any) => props.mobileDirection || 'column'};
    place-content: center;
    justify-content: center;
  }
`;

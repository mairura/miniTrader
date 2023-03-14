import { Photos } from "@/components/common/Image";
import styled from "styled-components";
import { Header } from "../common/Header";

export const GetStartedBody = styled.div`
  padding: 50px 100px;
  @media (max-width: 768px) {
    padding: 50px 20px;
  }
`;
export const StartedImage = styled(Photos)`
  width: 100%;
  height: 100%;
`;

export const StartedHeader = styled(Header)`
  display: none;
  @media (max-width: 768px) {
    font-weight: 700;
    display: flex;
    padding: 20px 0px 50px 0px;
    font-size: 16px;
    text-align: center;
    justify-content: center;
  }
`;

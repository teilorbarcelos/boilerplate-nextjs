import styled from "styled-components";

export const LoadingContainer = styled.div`
  position: fixed;
  inset: 0px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;

  .loadingImg {
    width: 70px;
  }
`;

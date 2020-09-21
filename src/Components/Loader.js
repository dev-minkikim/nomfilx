import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  font-size: 32px;
  display: flex;
  justify-content: center;
`;
export default () => (
  <Container>
    <span role="img" aria-label="Loading">
      ⏱
    </span>
  </Container>
);

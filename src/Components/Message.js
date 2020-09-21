import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  display: flex;
  justify-content: center;
  font-size: 28px;
  font-weight: 600;
  margin-top: 30px;
`;
const Text = styled.span`
  color: ${(props) => props.color};
`;
const Message = ({ text, color }) => (
  <Container>
    <Text color={color}>{text}</Text>
  </Container>
);

Message.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Message;

"use client";
import styled from "styled-components";

const Loading = () => {
  return (
    <Wrapper>
      <Icon />
    </Wrapper>
  );
};

export default Loading;

const Wrapper = styled.div`
  min-height: 100%;
  min-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid #1b1841;
  margin: 50px 0;
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;

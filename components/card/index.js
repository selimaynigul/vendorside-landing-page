import styled from "styled-components";
import Btn from "../button";

export default function Card(props) {
  return (
    <Content>
      <Heading>{props.heading}</Heading>
      <Text show={props.show}>{props.text}</Text>
      <Btn text={props.btn}></Btn>
    </Content>
  );
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 20px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

const Heading = styled.h1`
  font-size: 2.2rem;
  margin: 0;

  @media (max-width: 1024px) {
    font-size: 1.2rem;
  }
`;

const Text = styled.p`
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    display: ${(props) => (props.show === "false" ? "none" : "")};
  }
`;

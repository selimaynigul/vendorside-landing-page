import styled from "styled-components";
import Box from "../card";

export default function Section(props) {
  return (
    <Div image={props.image}>
      <Card side={props.side}>
        <Box heading={props.heading} text={props.text} btn={props.btn} />
      </Card>
    </Div>
  );
}

const Div = styled.section`
  background-image: url(${(props) => props.image.src});
  background-size: cover;
  background-position: center;
  position: relative;
  margin: 30px 0 70px 0;
  height: 500px;

  @media (max-width: 768px) {
    height: 350px;
  }
`;

const Card = styled.div`
  height: 450px;
  width: 600px;
  background: white;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;

  display: flex;
  align-items: center;
  position: absolute;
  top: 80px;
  padding: 0 30px;
  left: ${(props) => (props.side === "right" ? "40%" : "15%")};

  h1 {
    color: #3e3e3e;
  }

  p {
    color: gray;
  }

  &:hover {
    box-shadow: 2px 2px 40px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    height: auto;
    width: 80%;
    max-width: 600px;
    transform: translateX(-50%);
    top: 60px;
    left: 50%;
    padding: 20px;
    flex-direction: column;

    h1 {
      margin-bottom: 20px;
    }
  }
`;

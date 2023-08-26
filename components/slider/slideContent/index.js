import styled from "styled-components";
import Box from "../../card";

export default function SlideContent(props) {
  return (
    <Slide back={props.back}>
      <Card>
        <Box
          show="false"
          heading={props.heading}
          text={props.text}
          btn={props.btn}
        />
      </Card>
    </Slide>
  );
}

const Slide = styled.div`
  height: 100%;
  background-image: url(${(props) => props.back.src});
  border-radius: 20px;
`;

const Card = styled.div`
  position: absolute;
  width: 45%;
  left: 40%;
  top: 60px;
  color: white;
  display: flex;
  flex-direction: column;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  transform: translateX(-50%);

  h1 {
    margin: 0;
  }

  @media (max-width: 768px) {
    left: 60%;
    width: 80%;
    top: 40px;
  }
`;

import styled from "styled-components";

export default function Content(props) {
  return (
    <Container image={props.image}>
      <Card side={props.side}></Card>
    </Container>
  );
}

const Container = styled.section`
  background-image: url(${(props) => props.image.src});
  background-size: cover;
  background-position: center;
  height: 400px;
  width: 85%;
  margin: 20px auto;
  border-radius: 20px;
  background-color: gray;
  padding: 20px;

  @media (max-width: 768px) {
    height: 350px;
  }
`;

const Card = styled.div`
  height: 100%;
  width: 600px;
  background: white;
  border-radius: inherit;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;

  h1 {
    color: #3e3e3e;
  }

  p {
    color: gray;
  }

  &:hover {
    box-shadow: 2px 2px 40px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    height: auto;
    width: 80%;
    max-width: 600px;
    transform: translateX(-50%);
    top: 100px;
    left: 50%;
    padding: 20px;
    flex-direction: column;

    h1 {
      margin-bottom: 20px;
    }
  }
`;

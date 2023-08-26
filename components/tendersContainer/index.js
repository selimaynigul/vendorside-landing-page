import styled from "styled-components";

const Container = styled.div`
  max-width: 70rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TendersContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default TendersContainer;

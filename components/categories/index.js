import styled from "styled-components";
import Link from "next/link";

const Categories = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Categories;

const Container = styled.div`
  max-width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  gap: 30px;

  margin-top: 50px;
`;

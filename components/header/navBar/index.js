import styled from "styled-components";
import { useRouter } from "next/router";

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: ${({ width }) => width};
`;

const Nav = ({ width, children }) => {
  return <NavContainer width={width}>{children}</NavContainer>;
};

export default Nav;

import styled from "styled-components";
import Link from "next/link";

const NavLink = styled(Link)`
  color: lightgray;
  text-decoration: none;

  background-color: ${({ active }) => (active ? "#71c1b3ff" : "transparent")};
  padding: 5px 10px;
  border-radius: 10px;
`;

const NavItem = ({ href, active, children }) => (
  <NavLink href={href} active={active}>
    {children}
  </NavLink>
);

export default NavItem;

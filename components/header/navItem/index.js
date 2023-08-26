import styled from "styled-components";
import Link from "next/link";

const NavLink = styled(Link)`
  color: lightgray;
  text-decoration: none;

  &:hover {
    color: white;
  }
`;

const NavItem = ({ href, children }) => (
  <NavLink href={href}>{children}</NavLink>
);

export default NavItem;

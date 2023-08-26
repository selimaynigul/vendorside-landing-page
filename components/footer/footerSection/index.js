"use client";
import styled from "styled-components";

const FooterSection = (props) => {
  let i = 1;
  const footerLinks = props.links.map((link) => {
    return (
      <ListItem key={i++}>
        <FooterLink href={link.href}>
          <strong>{link.content}</strong>
        </FooterLink>
      </ListItem>
    );
  });

  return (
    <Column>
      <Heading>{props.header}</Heading>
      <List>{footerLinks}</List>
    </Column>
  );
};

export default FooterSection;

const ListItem = styled.li`
  list-style: none;
`;

const List = styled.ul`
  padding: 0;

  li {
    margin: 5px 0;
  }
`;

const Column = styled.div`
  color: white;
`;

const FooterLink = styled.a`
  color: lightgrey;
  text-decoration: none;
  font-size: 0.7rem;

  &:hover {
    text-decoration: underline;
  }
`;

const Heading = styled.strong`
  padding-bottom: 30px;
  display: block;
`;

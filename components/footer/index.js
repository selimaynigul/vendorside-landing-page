"use client";
import styled from "styled-components";
import FooterColumn from "./footerSection";
import Contact from "../contact";
import Link from "next/link";
import {
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillGooglePlusCircle,
} from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";

import {
  links1,
  links2,
  links3,
  links4,
  links5,
  links6,
} from "../../data/links";

const CustomFooter = styled.footer`
  width: 100%;
  margin-top: 100px;
  background-color: rgba(27, 24, 65, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    height: 240px;
    margin-top: 10px;
    background-color: white;
  }
`;

const Cont = styled.div`
  position: absolute;
  top: -50px;
  width: 100%;
  max-width: 1300px;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    top: 0;
  }
`;

const Heading = styled.div`
  background: rgb(43, 60, 143);
  background: linear-gradient(
    292deg,
    rgba(43, 60, 143, 1) 0%,
    rgba(27, 24, 65, 1) 100%
  );
  width: 100%;
  position: relative;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid gray;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;

  @media (max-width: 768px) {
    background: white;
    margin-top: 30px;
  }
`;
const Copyrights = styled(Link)`
  color: lightgray;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    position: absolute;
    left: 10px;
    color: black;
    font-size: 0.9rem;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 220px 20px 40px 20px;
  display: flex;
  align-content: flex-end;
  justify-content: space-around;
  align-items: start;
  gap: 10px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    display: none;
  }
`;
const Social = styled.div`
  display: flex;
  gap: 20px;
  position: absolute;
  bottom: 20px;
  right: 10%;
  background-color: red;
  padding: 10px 15px;
  border-radius: 10px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;

  @media (max-width: 768px) {
    background: none;
    box-shadow: none;
    right: 10px;
    top: 0;
    transform: scale(0.8);
    right: -10px;
  }
`;

const Footer = () => {
  return (
    <>
      <CustomFooter>
        <Cont>
          <Contact />
        </Cont>
        <Container>
          <FooterColumn header="Hakkımızda" links={links1}></FooterColumn>
          <FooterColumn header="Kampanyalar" links={links2}></FooterColumn>
          <FooterColumn
            header="Ürün ve Hizmetler"
            links={links3}
          ></FooterColumn>
          <FooterColumn header="Yardım" links={links4}></FooterColumn>
          <FooterColumn header="Hesabım" links={links5}></FooterColumn>
          <FooterColumn
            header="Tüketici Şikayetleri"
            links={links6}
          ></FooterColumn>
        </Container>
      </CustomFooter>
      <Heading>
        <Social>
          <Link href="/">
            <BiLogoFacebook size={24} style={{ color: "#1b1841" }} />
          </Link>
          <Link href="/">
            <AiOutlineTwitter size={24} style={{ color: "#1b1841" }} />
          </Link>
          <Link href="/">
            <AiFillYoutube size={24} style={{ color: "#1b1841" }} />
          </Link>
          <Link href="/">
            <AiFillGooglePlusCircle size={24} style={{ color: "#1b1841" }} />
          </Link>
        </Social>
        <Copyrights href="">© Copyrights | Lorem Ipsum</Copyrights>
      </Heading>
    </>
  );
};

export default Footer;

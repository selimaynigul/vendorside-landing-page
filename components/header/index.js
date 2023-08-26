"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Nav from "./navBar";
import { VscThreeBars, VscChromeClose } from "react-icons/vsc";
import { TfiAngleRight } from "react-icons/tfi";
import NavItem from "./navItem";
import Link from "next/link";
import Image from "next/image";
import image from "../../public/images/Logo_1.svg";

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 5;
`;

const Sidebar = styled.div`
  height: 100%;
  width: 250px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  background-color: #36a693;
  z-index: 6;
  transition: transform 0.3s ease-in-out; /* Add the transition here */
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  box-shadow: 0 15px 15px rgba(0, 0, 0, 0.3);

  div {
    display: flex;
    flex-direction: column;
    margin-top: 60px;

    * {
      padding: 15px 20px;
      margin: 0 10px;
      border-radius: 10px;
      color: white;
      transition: 0.2s;

      &:hover {
        background-color: #71c1b3ff;
      }
    }
  }
`;

const Heading = styled.nav`
  background: rgb(22, 66, 59);
  background: linear-gradient(
    292deg,
    rgba(58, 173, 155, 1) 0%,
    rgba(22, 66, 59, 1) 100%
  );
  text-transform: uppercase;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: white;
    font-weight: bold;
  }
`;

const NavMenu = styled.nav`
  background-color: #36a693;
  display: flex;
  justify-content: center;
  padding: 5px 0;
  height: 40px;
  position: relative;

  nav {
    @media (max-width: 900px) {
      display: none;
    }
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  a {
    color: white;
  }

  div {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: 0.3s;
    @media (max-width: 1100px) {
      width: 95%;
    }
  }
`;

const LoginButton = styled(Link)`
  color: #2a2663 !important;
  text-decoration: none;
  display: inline;
  background-color: white;
  border-radius: 8px;
  padding: 5px 6px 5px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  position: absolute;
  right: 10%;
  top: -20px;

  &:active {
    transform: scale(0.97);
  }

  @media (max-width: 1100px) {
    top: 5px;
    right: 2%;
    background-color: transparent;
    border: none;
    color: white !important;

    &:hover {
      background-color: #71c1b3ff;
    }
  }
`;

const ArrowIcon = styled(TfiAngleRight)`
  background-color: #36a693;
  color: white;
  margin: 0;
  padding: 0;
  padding: 8px;
  border-radius: 6px;
  stroke-width: 1;
  transition: 0.3s;
`;

const StyledImage = styled(Image)`
  width: 120px;
  height: auto;
`;

const SidebarLogo = styled(Image)`
  width: 120px;
  height: auto;
  position: absolute;
  bottom: 25px;
  left: 25px;
`;

const MenuButton = styled.button`
  background: none;
  border-radius: 10px;
  width: 35px;
  height: 35px;
  position: relative;
  border: none;
  color: white;
  margin: 10px auto 10px 10px;
  display: none;
  transition: 0.2s;
  cursor: pointer;

  @media (max-width: 900px) {
    display: block;
  }

  &:hover {
    background-color: #71c1b3ff;
  }

  .menuIcon {
    position: absolute;
    top: 15%;
    left: 15%;
    font-size: 24px;
  }
`;

const CloseButton = styled(MenuButton)`
  position: absolute;
  top: 5px;
  left: 15px;
`;

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  // Handle closing the sidebar when the screen size changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1100) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header>
      <Heading>
        <NavItem href="/">Tedarik Zinciri Yönetimi</NavItem>
      </Heading>

      <NavMenu>
        <div>
          <Link href="/">
            <StyledImage src={image} />
          </Link>
          <MenuButton onClick={handleToggleSidebar}>
            <VscThreeBars className="menuIcon" />
          </MenuButton>
          <Nav width="500px">
            <NavItem href="/about">Hakkımızda</NavItem>
            <NavItem href="/">Tedarikçi Olmak</NavItem>
            <NavItem href="/relations">Tedarikçi İlişkileri</NavItem>
            <NavItem href="/tenders">İhaleler</NavItem>
          </Nav>
        </div>
        <LoginButton href="/">
          Tedarikçi Girişi
          <ArrowIcon />
        </LoginButton>
      </NavMenu>

      <Sidebar open={isSidebarOpen}>
        <CloseButton onClick={handleToggleSidebar}>
          <VscChromeClose className="menuIcon" />
        </CloseButton>
        <div onClick={handleToggleSidebar}>
          <NavItem href="/about">Hakkımızda</NavItem>
          <NavItem href="/">Tedarikçi Olmak</NavItem>
          <NavItem href="/">Tedarikçi İlişkileri</NavItem>
          <NavItem href="/tenders">İhaleler</NavItem>
        </div>
        <Link href="/">
          <SidebarLogo src={image} />
        </Link>
      </Sidebar>
      {isSidebarOpen && <Backdrop onClick={handleToggleSidebar} />}
    </header>
  );
};

export default Header;

"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Nav from "./navBar";
import { VscThreeBars, VscChromeClose } from "react-icons/vsc";
import { TfiAngleRight } from "react-icons/tfi";
import NavItem from "./navItem";
import Sidebar from "../sidebar";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import image from "../../public/images/Logo_1.svg";

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 7;
`;

const NavMenu = styled.nav`
  background-color: #36a693;
  display: flex;
  justify-content: center;
  padding: 5px 0;
  height: 60px;
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
    padding: 5px 10px;
    border-radius: 10px;
    transition: 0.2s;
  }

  div {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: 0.3s;
    background-color: red;

    @media (max-width: 1100px) {
      width: 95%;
    }
  }
`;

const LoginButton = styled(Link)`
  color: #2a2663 !important;
  text-decoration: none;
  background-color: white;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

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
  width: 160px;
  height: auto;
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
      <NavMenu>
        <div>
          <Link href="https://vendorside.medyasoft-innolab.com/auth/login">
            <StyledImage src={image} />
          </Link>
          <MenuButton onClick={handleToggleSidebar}>
            <VscThreeBars className="menuIcon" />
          </MenuButton>
          <Nav width="500px">
            <NavItem href="/about" active={usePathname() === "/about"}>
              Hakkımızda
            </NavItem>
            <NavItem href="/" active={usePathname() === "/"}>
              Tedarikçi Olmak
            </NavItem>
            <NavItem href="/relations" active={usePathname() === "/relations"}>
              Tedarikçi İlişkileri
            </NavItem>
            <NavItem href="/tenders" active={usePathname() === "/tenders"}>
              İhaleler
            </NavItem>
          </Nav>
          <LoginButton href="/">
            Tedarikçi Girişi
            <ArrowIcon />
          </LoginButton>
        </div>
      </NavMenu>

      <Sidebar open={isSidebarOpen} onClose={handleToggleSidebar} />
      {isSidebarOpen && <Backdrop onClick={handleToggleSidebar} />}
    </header>
  );
};

export default Header;

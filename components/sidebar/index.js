import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { VscChromeClose } from "react-icons/vsc";
import NavItem from "../header/navItem";
import image from "../../public/images/Logo_1.svg";

const Container = styled.div`
  height: 100%;
  width: 250px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  background-color: #36a693;
  z-index: 8;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  box-shadow: 0 15px 15px rgba(0, 0, 0, 0.3);

  div {
    display: flex;
    flex-direction: column;

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

const SidebarLogo = styled(Image)`
  width: 120px;
  height: auto;
  position: absolute;
  bottom: 25px;
  left: 25px;
`;

const CloseButton = styled.button`
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
  display: block;

  &:hover {
    background-color: #71c1b3ff;
  }
`;

const CloseIcon = styled(VscChromeClose)`
  position: absolute;
  top: 15%;
  left: 15%;
  font-size: 24px;
`;

const Sidebar = ({ open, onClose }) => {
  return (
    <Container open={open}>
      <CloseButton onClick={onClose}>
        <CloseIcon />
      </CloseButton>
      <div onClick={onClose}>
        <NavItem href="/about">Hakkımızda</NavItem>
        <NavItem href="/">Tedarikçi Olmak</NavItem>
        <NavItem href="/">Tedarikçi İlişkileri</NavItem>
        <NavItem href="/tenders">İhaleler</NavItem>
      </div>
      <Link href="/">
        <SidebarLogo src={image} />
      </Link>
    </Container>
  );
};

export default Sidebar;

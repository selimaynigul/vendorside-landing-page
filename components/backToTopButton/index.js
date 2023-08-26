"use client";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function BackToTopButton() {
  const [showButton, setshowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 800 ? setshowButton(true) : setshowButton(false);
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    showButton && (
      <Button onClick={scrollUp}>
        <span>^</span>
      </Button>
    )
  );
}

const Button = styled.button`
  position: fixed;
  bottom: 15px;
  left: 15px;
  height: 45px;
  width: 45px;
  padding-top: 10px;
  border-radius: 10px;
  background: #4d96ffff;
  color: #0c203d;
  border: none;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    transform: scale(1.04);
  }
  &:active {
    transform: scale(0.96);
  }
`;

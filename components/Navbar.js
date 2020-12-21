import Head from "next/head";
import Link from "next/link";
import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";

const Header = styled.header`
  padding: 1rem;
  width: 100%;
  background: white;
  display: flex;
  justify-content: space-between;
  }

  a {
      color: black;
      text-decoration: none;
  }
`;

const NavItemGroup = styled.div``;

const Navbar = ({ data }) => {
  const [isScrolling, setIsScrolling] = React.useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > document.querySelector("header").offsetHeight) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  console.log("Is not scrolling? -> " + isScrolling);

  return (
    <>
      <Header id="header" sticky={isScrolling}>
        <Link href="/">M.B portfolio</Link>
        <NavItemGroup>
          <Link href="/about">About</Link>
        </NavItemGroup>
      </Header>
    </>
  );
};

export default Navbar;

import Head from "next/head";
import Link from "next/link";
import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

const Header = styled.header`
  padding: 1rem;
  width: 100%;
  background: white;
  display: flex;
  justify-content: space-between;

  a {
    color: black;
    text-decoration: none;
  }

  .active > a {
    font-weight: bold;
    text-decoration: underline;
  }
`;

const NavItemGroup = styled.div`
  display: flex;
`;

const LinkWrapper = styled.div`
  margin-left: 1rem;
`;

const Navbar = ({ data }) => {
  const router = useRouter();
  return (
    <>
      <Header id="header">
        <Link href="/">Marilia Bognandi</Link>
        <NavItemGroup>
          <LinkWrapper
            className={router.asPath == "/portfolio" ? "active" : ""}
          >
            <Link href="/portfolio">Portfolio</Link>
          </LinkWrapper>
          <LinkWrapper className={router.asPath == "/about" ? "active" : ""}>
            <Link href="/about">About</Link>
          </LinkWrapper>
          <LinkWrapper>
            <a href="mailto:marilia@morpheus.se">Contact</a>
          </LinkWrapper>
        </NavItemGroup>
      </Header>
    </>
  );
};

export default Navbar;

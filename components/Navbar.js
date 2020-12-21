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

  a {
    color: black;
    text-decoration: none;
  }
`;

const NavItemGroup = styled.div`
  display: flex;
`;

const LinkWrapper = styled.div`
  margin-left: 1rem;
`;

const Navbar = ({ data }) => {
  return (
    <>
      <Header id="header">
        <Link href="/">Marilia Bognandi</Link>
        <NavItemGroup>
          <LinkWrapper>
            <Link href="/portfolio">Portfolio</Link>
          </LinkWrapper>
          <LinkWrapper>
            <Link href="/about">About</Link>
          </LinkWrapper>
          <LinkWrapper>
            <a href="mailto:marilia.bognandi@gmail.com">Contact</a>
          </LinkWrapper>
        </NavItemGroup>
      </Header>
    </>
  );
};

export default Navbar;

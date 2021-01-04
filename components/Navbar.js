import Head from "next/head";
import Link from "next/link";
import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import BurgerMenu from "@components/BurgerMenu";

const HeaderWrapper = styled.header`
  padding: 1rem;
  width: 100%;
  background: white;

  a {
    color: black;
    text-decoration: none;
  }

  .active > a {
    font-weight: bold;
    text-decoration: underline;
  }
`;

const DesktopHeader = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 991px) {
    display: none;
  }
`;
const MobileHeader = styled.div`
  @media (min-width: 992px) {
    display: none;
  }
`;

const MobileHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MobileMenuBody = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  background: #f8f5f2;
  padding: 5rem 1rem;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.3s ease-in-out;
`;

const NavItemGroup = styled.div`
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    text-align: center;
  }
`;

const LinkWrapper = styled.div`
  @media (max-width: 991px) {
    margin-bottom: 1rem;
    font-size: 200%;
  }
  @media (min-width: 992px) {
    margin-left: 1rem;
  }
`;

const Navbar = ({ data }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  return (
    <>
      <HeaderWrapper id="header">
        <DesktopHeader>
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
        </DesktopHeader>
        <MobileHeader>
          <MobileHeaderContainer>
            <Link href="/">Marilia Bognandi</Link>
            <BurgerMenu open={open} setOpen={setOpen} />
          </MobileHeaderContainer>
          <MobileMenuBody open={open} setOpen={setOpen}>
            <NavItemGroup>
              <LinkWrapper
                className={router.asPath == "/portfolio" ? "active" : ""}
                onClick={() => setOpen(!open)}
              >
                <Link href="/portfolio">Portfolio</Link>
              </LinkWrapper>
              <LinkWrapper
                className={router.asPath == "/about" ? "active" : ""}
                onClick={() => setOpen(!open)}
              >
                <Link href="/about">About</Link>
              </LinkWrapper>
              <LinkWrapper onClick={() => setOpen(!open)}>
                <a href="mailto:marilia@morpheus.se">Contact</a>
              </LinkWrapper>
            </NavItemGroup>
          </MobileMenuBody>
        </MobileHeader>
      </HeaderWrapper>
    </>
  );
};

export default Navbar;

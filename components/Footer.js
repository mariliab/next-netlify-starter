import Link from "next/link";
import styled from "styled-components";
import Head from "next/head";

const Container = styled.div`
  padding: 2rem 1rem 3rem 1rem;
  background: rgba(0, 0, 0, 0.8);
  min-height: 300px;
`;

const Heading = styled.h2`
  margin-top: 0;
  margin-bottom: 2rem;
  color: white;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 1rem;
  color: #ddcdc1;
`;
const StyledLink = styled.a`
  color: white;
  font-size: 2rem;
  text-decoration: none;
  font-weight: 200;
  @media (min-width: 768px) {
    font-size: 3rem;
  }
  :hover {
    color: #ddcdc1;
  }
  :not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const Copyright = styled.p`
  margin-top: 3rem;
  margin-bottom: 0;
  color: #ddcdc1;
  text-align: center;
  width: 100%;
  font-size: 12px;
`;

const Text = styled.p`
  margin: 0;
  color: rgba(254, 254, 254, 0.7);
  line-height: 1.4;
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
`;

const LinkWrapper = styled.div`
  > a {
    color: white;
    :hover {
      color: #ddcdc1;
    }
  }
  :not(:last-child) {
    @media (max-width: 991px) {
      margin-bottom: 1.5rem;
    }
    @media (min-width: 992px) {
      margin-bottom: 1.5rem;
      margin-right: 1rem;
    }
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 991px) {
    flex-direction: column;
  }
`;
const Column = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.div`
  font-family: "Playfair Display", serif;
  font-weight: bold;
  font-size: 1.5rem;
  cursor: pointer;
  color: #ddcdc1;
  margin-bottom: 1rem;

  > span {
    font-weight: 300;
    font-family: "Josefin Sans", sans-serif;
    color: white;
  }
  @media (min-width: 992px) {
    font-size: 1.75rem;
  }
`;

export default function Footer() {
  return (
    <Container>
      <Row>
        <Column>
          <Heading>Get in touch</Heading>
          <StyledLink href="mailto:marilia@morpheus.se">
            marilia@morpheus.se
          </StyledLink>
          <StyledLink>+46736937742</StyledLink>
        </Column>
        <Column>
          <Heading>Social</Heading>
          <SocialLinks>
            <LinkWrapper>
              <a
                href="https://www.linkedin.com/in/mariliabognandi/"
                target="_blank"
              >
                LinkedIn
              </a>
            </LinkWrapper>
            <LinkWrapper>
              <a
                href="https://www.instagram.com/bognandiphotography/"
                target="_blank"
              >
                Instagram
              </a>
            </LinkWrapper>
            <LinkWrapper>
              <a href="https://github.com/mariliab" target="_blank">
                Github
              </a>
            </LinkWrapper>
          </SocialLinks>
        </Column>
        <Column>
          <Logo>
            MB <span>portfolio</span>
          </Logo>
          <Text>
            Built with Next.js, React.js, Contentful CMS, <br></br>deployed on
            Vercel.
          </Text>
        </Column>
      </Row>
      <Row>
        <Copyright>Copyright © Marilia Bognandi 2021</Copyright>
      </Row>
    </Container>
  );
}

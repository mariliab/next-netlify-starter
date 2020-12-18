import Link from "next/link";
import styled from "styled-components";

const Title = styled.h2`
  color: white;
`;
const Email = styled.a`
  color: white;
  font-size: 150%;
  text-decoration: none;
  @media (min-width: 768px) {
    font-size: 300%;
  }
  :hover {
    color: lightpink;
  }
`;

const BuiltWithContainer = styled.div`
  margin-top: 3rem;
  color: white;
  display: flex;
  font-size: 75%;
`;
const BuiltWithItem = styled.div`
  margin: 0 1rem;
  font-weight: bold;
`;

const Container = styled.div`
  background: rgba(0, 0, 0, 0.8);
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Footer() {
  return (
    <Container>
      <Title>Get in touch</Title>
      <Email href="mailto:marilia.bognandi@gmail.com">
        marilia.bognandi@gmail.com
      </Email>
      <BuiltWithContainer>
        Built with
        <BuiltWithItem>Next.js</BuiltWithItem>
        <BuiltWithItem>React.js</BuiltWithItem>
        <BuiltWithItem>Contentful.js</BuiltWithItem>
      </BuiltWithContainer>
    </Container>
  );
}

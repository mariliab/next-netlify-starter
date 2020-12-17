import Link from "next/link";
import styled from "styled-components";

const Title = styled.h2`
  color: white;
`;

const Container = styled.div`
  background: rgba(0, 0, 0, 0.8);
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Footer() {
  return (
    <Container>
      <Title>Get in touch</Title>
    </Container>
  );
}

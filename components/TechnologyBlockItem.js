import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  background: rgba(0, 0, 0, 0.5);
  padding: 1rem;
`;

const Title = styled.h4`
  color: white;
  margin: 0;
`;

const TechnologyBlockItem = ({ name }) => {
  return (
    <Container>
      <Title>{name}</Title>
    </Container>
  );
};

export default TechnologyBlockItem;

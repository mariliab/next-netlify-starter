import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  background: #ddcdc1;
  padding: 1rem;
  margin-bottom: 0.25rem;
  margin-right: 0.25rem;
`;

const Title = styled.h4`
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

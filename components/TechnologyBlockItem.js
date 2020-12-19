import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  background: rgba(0, 0, 0, 0.5);
  padding: 1rem;
  margin-bottom: 0.25rem;
  margin-right: 0.25rem;
  @media (min-width: 992px) {
    margin-bottom: 0;
  }
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

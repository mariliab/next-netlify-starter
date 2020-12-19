import Link from "next/link";
import styled from "styled-components";
import TechnologyBlockItem from "@components/TechnologyBlockItem";

const Container = styled.div`
  padding: 3rem 0;
`;

const TechnologyBlockItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Title = styled.h2``;

const TechnologyBlock = ({ data }) => {
  return (
    <Container>
      <Title>{data?.fields?.headline}</Title>
      <TechnologyBlockItemContainer>
        {data?.fields?.technologyItems.map((name, index) => {
          return <TechnologyBlockItem key={index} name={name} />;
        })}
      </TechnologyBlockItemContainer>
    </Container>
  );
};

export default TechnologyBlock;

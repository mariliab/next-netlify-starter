import Link from "next/link";
import styled from "styled-components";
import TechnologyBlockItem from "@components/TechnologyBlockItem";

const Container = styled.div``;

const TechnologyBlockItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 50%;
`;

const Title = styled.h3``;

const TechnologyBlock = ({ data }) => {
  console.log("techblock: " + JSON.stringify(data, null, 2));
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

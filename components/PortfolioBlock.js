import Link from "next/link";
import styled from "styled-components";
import PortfolioBlockItem from "components/PortfolioBlockItem";

const Container = styled.div``;

const PortfolioBlockItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Title = styled.h2`
  text-align: center;
`;
const SubTitle = styled.h3`
  text-align: center;
`;

const PortfolioBlock = ({ data }) => {
  return (
    <Container>
      <Title>{data?.headline}</Title>
      <SubTitle>{data?.subheadline}</SubTitle>
      <PortfolioBlockItemContainer>
        {data?.portfolioItemList.map((item, index) => {
          return <PortfolioBlockItem data={{ ...item }} />;
        })}
      </PortfolioBlockItemContainer>
    </Container>
  );
};

export default PortfolioBlock;

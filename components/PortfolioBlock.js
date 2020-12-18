import Link from "next/link";
import styled from "styled-components";
import PortfolioBlockItem from "components/PortfolioBlockItem";

const Container = styled.div``;

const PortfolioBlockItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const TitleBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  backgroud: white;
  width: 100%;
  min-height: 300px;
  @media (min-width: 768px) {
    width: 33.33333%;
    min-height: 500px;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-size: 250%;
`;
const SubTitle = styled.h3`
  text-align: center;
  font-size: 150%;
`;

const PortfolioBlock = ({ data }) => {
  console.log("PORTFOLIO DATA: " + JSON.stringify(data, null, 2));
  return (
    <Container>
      <PortfolioBlockItemContainer>
        <TitleBlock>
          <Title>{data?.headline}</Title>
          <SubTitle>{data?.subheadline}</SubTitle>
        </TitleBlock>
        {data?.portfolioItemList.map((item, index) => {
          return <PortfolioBlockItem key={index} data={{ ...item }} />;
        })}
      </PortfolioBlockItemContainer>
    </Container>
  );
};

export default PortfolioBlock;

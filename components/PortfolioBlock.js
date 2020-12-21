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
    width: 50%;
    min-height: 600px;
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
  return data ? (
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
  ) : (
    "No data"
  );
};

export default PortfolioBlock;

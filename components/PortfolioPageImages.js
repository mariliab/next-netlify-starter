import styled from "styled-components";

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
  background: #ddcdc1;
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
  margin: 0 0 1rem 0;
`;
const SubTitle = styled.h3`
  text-align: center;
  font-size: 150%;
  margin: 0;
`;

const Image = styled.img`
  width: 100%;
`;

const PortfolioPageImages = ({ data }) => {
  //   console.log(
  //     "Portfolio item -> " + JSON.stringify(data[0].fields.file.url, null, 2)
  //   );
  return data ? (
    <Container>
      <Image src={data[0]?.fields?.file?.url} />
    </Container>
  ) : null;
};

export default PortfolioPageImages;

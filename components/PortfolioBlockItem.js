import Link from "next/link";
import styled from "styled-components";

const Background = styled.div`
  width: 100%;
  background-position: center;
  background-size: cover;
  @media (min-width: 768px) {
    width: 50%;
  }
  min-height: 300px;
  background-image: url(${(props) =>
    props.backgroundImage ? props.backgroundImage : ""});
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h3``;
const SubTitle = styled.h4``;

const PortfolioBlockItem = ({ data }) => {
  console.log("item: " + JSON.stringify(data, null, 2));
  return (
    <Background backgroundImage={data.fields?.featuredImage?.fields?.file?.url}>
      <Container>
        <Title>{data.fields.title}</Title>
      </Container>
    </Background>
  );
};

export default PortfolioBlockItem;
